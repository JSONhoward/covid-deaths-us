import React from 'react'
import { Transition } from 'react-transition-group';
import anime from 'animejs'

import { GraphBarStyled, Bar, Label, Deaths, fadeDuration } from './GraphBar.styled';

type Props = {
    height: number,
    stateName: string,
    deaths: number,
    visible: boolean,
    age: string,
    options: string
}

const GraphBar: React.FC<Props> = ({ height, stateName, deaths, visible, age, options }) => {
    const [animDeaths, setAnimDeaths] = React.useState(0)

    React.useEffect(() => {
        let valObj = {
            value: 0
        }

        anime({
            targets: valObj,
            value: deaths,
            round: 1,
            easing: 'easeInOutQuad',
            duration: 2000,
            autoplay: false,
            loop: false,
            update: () => {
                setAnimDeaths(valObj.value)
            }
        }).play()
    }, [deaths])

    return (
        <Transition in={visible} timeout={fadeDuration}>
            {
                state => (
                    <GraphBarStyled state={state}>
                        <Label>
                            {options === 'state' ? stateName : age}
                        </Label>
                        <Bar barHeight={height} state={state} />
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
