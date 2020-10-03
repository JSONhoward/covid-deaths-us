import React from 'react'
import { useRecoilValue } from 'recoil';

import { GraphContainer, LabelX, LabelY, LabelContainer } from './Graph.styled';
import GraphBar from './GraphBar'
import GraphOptions from './GraphOptions'
// import { CovidTestData } from './Graph.utils';
import { range } from '../../Utils/helpers';
import { FetchCovidData } from '../../Store/Selectors';

export const YLabel = 'Covid-19 Deaths'

const Graph = () => {
    const [visible, setVisible] = React.useState<boolean>(false)
    const [option, setOption] = React.useState<string>('state')
    const covidData = useRecoilValue<FetchCovidDataType>(FetchCovidData)
    const mainRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        setVisible(true)
    }, [visible])

    const handleOptions = (event: React.MouseEvent<HTMLButtonElement>) => {
        setOption((event.target as HTMLButtonElement).id)
    }

    const bars = covidData[option].cleanData.map((el: InitialResponseType, i: number) => {
        const height = Math.floor(range(covidData[option].min, covidData[option].max, 50, mainRef.current?.clientHeight! - 100, el.covid_19_deaths as number))

        return (
            <React.Fragment key={'fragment' + i}>
                <GraphBar data-testid={`graphBar${i}`} data={el} key={i} height={height} visible={visible} option={option} />
            </React.Fragment>
        )
    })

    return (
        <LabelContainer>
            <GraphOptions dateUpdated={covidData[option].updated} options={option} handleOptions={handleOptions} />
            <LabelY>{YLabel}</LabelY>
            <GraphContainer ref={mainRef}>
                {bars}
            </GraphContainer>
            <LabelX>{option === 'state' ? 'State' : 'Age'}</LabelX>
        </LabelContainer>
    )
}

export default Graph
