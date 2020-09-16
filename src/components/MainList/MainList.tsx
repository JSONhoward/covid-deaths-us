import React from 'react'

import { MainListContainer, LabelX, LabelY, LabelContainer } from './MainList.styled';
import GraphBar from './GraphBar'
import GraphOptions from './GraphOptions'
import { CovidTestData } from './MainList.utils';
import { range } from '../../Utils/helpers';
// import { FetchCovidData } from '../../Store/Selectors';
// import { useRecoilValue } from 'recoil';

const MainList = () => {
    const [visible, setVisible] = React.useState<boolean>(false)
    const [options, setOption] = React.useState<string>('state')
    // const covidData = useRecoilValue<FetchCovidDataType>(FetchCovidData)
    const mainRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        setVisible(true)
    }, [visible])

    const handleOptions = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOption((event.target as HTMLButtonElement).id)
    }

    const bars = CovidTestData[options].cleanData.map((el: any, i: string | number | null | undefined) => {
        const height = Math.floor(range(CovidTestData[options].min, CovidTestData[options].max, 50, mainRef.current?.clientHeight! - 100, el.covid_19_deaths))

        return (
            <React.Fragment key={'fragment' + i}>
                <GraphBar key={i} height={height} age={el.age_group_new === '85' ? '85+' : el.age_group_new === '1' ? 'under 1': el.age_group_new} stateName={el.state} deaths={el.covid_19_deaths} visible={visible} options={options} />
            </React.Fragment>
        )
    })

    return (
        <LabelContainer>
            <GraphOptions options={options} handleOptions={handleOptions} />
            <LabelY>Covid-19 Deaths</LabelY>
            <MainListContainer ref={mainRef}>
                {bars}
            </MainListContainer>
            <LabelX>{options === 'state' ? 'State' :'Age'}</LabelX>
        </LabelContainer>
    )
}

export default MainList
