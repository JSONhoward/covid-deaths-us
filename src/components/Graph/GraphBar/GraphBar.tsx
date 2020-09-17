import React, { CSSProperties } from 'react'
import { Transition } from 'react-transition-group';
import anime from 'animejs'
import Tooltip from '@material-ui/core/Tooltip'

import { GraphBarStyled, Bar, Label, Deaths, fadeDuration } from './GraphBar.styled';

type Props = {
    height: number,
    visible: boolean,
    option: string,
    data: InitialResponseType,
}

const tooltipStyles = {
    container: { display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '125px', width: '250px' },
    rows: { display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '.75rem', width: '100%' }
}

const GraphBar: React.FC<Props> = ({ height, visible, option, data }) => {
    const [animDeaths, setAnimDeaths] = React.useState(0)

    React.useEffect(() => {
        let valObj = {
            value: 0
        }

        anime({
            targets: valObj,
            value: data.covid_19_deaths,
            round: 1,
            easing: 'easeInOutQuad',
            duration: 2000,
            autoplay: false,
            loop: false,
            update: () => {
                setAnimDeaths(valObj.value)
            }
        }).play()
    }, [data.covid_19_deaths])

    return (
        <Transition in={visible} timeout={fadeDuration}>
            {
                state => (
                    <GraphBarStyled state={state}>
                        <Label>
                            {option === 'state' ? data.state : (data.age_group_new === '85' ? '85+' : data.age_group_new === '1' ? 'under 1' : data.age_group_new)}
                        </Label>
                        <Tooltip title={
                            <React.Fragment>
                                <div style={tooltipStyles.container as CSSProperties}>
                                    <div style={tooltipStyles.rows as CSSProperties}>
                                        <p>Total:</p><p>{data.total_deaths}</p>
                                    </div>
                                    <div style={tooltipStyles.rows as CSSProperties}>
                                        <p>Pneumonia, influenza, or Covid-19:</p><p>{data.pneumonia_influenza_or_covid}</p>
                                    </div>
                                    <div style={tooltipStyles.rows as CSSProperties}>
                                        <p>Covid-19:</p><p>{data.covid_19_deaths}</p>
                                    </div>
                                    <div style={tooltipStyles.rows as CSSProperties}>
                                        <p>Pneumonia:</p><p>{data.pneumonia_deaths}</p>
                                    </div>
                                    <div style={tooltipStyles.rows as CSSProperties}>
                                        <p>Pneumonia and Covid-19:</p><p>{data.pneumonia_and_covid_19_deaths}</p>
                                    </div>
                                    <div style={tooltipStyles.rows as CSSProperties}>
                                        <p>Influenza:</p><p>{data.influenza_deaths}</p>
                                    </div>
                                </div>
                            </React.Fragment>
                        }
                            placement='right-start'>
                            <Bar barHeight={height} state={state} />
                        </Tooltip>
                        <Deaths>
                            {animDeaths}
                        </Deaths>
                    </GraphBarStyled>
                )
            }
        </Transition>
    )
}

export default GraphBar
