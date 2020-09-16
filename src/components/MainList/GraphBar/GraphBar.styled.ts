import styled, {keyframes} from 'styled-components'

export const fadeDuration = 1000

const redBarAnimation = keyframes`
0%{background-position:92% 0%}
50%{background-position:9% 100%}
100%{background-position:92% 0%}
`

export const GraphBarStyled = styled('div')<{state: string}>`
display: flex;
flex-direction: column-reverse;
align-items: flex-end;
height: 100%;
width: calc(90vw / 5);
min-width: 75px;
padding: 5px;
opacity: ${props => {
    switch(props.state) {
        case 'entering':
            return 1
        case 'entered':
            return 1
        case 'exiting':
            return 0
        case 'exited':
            return 0
        default:
            return 1
    }
}};
transition: opacity ${fadeDuration}ms ease-in-out;
`

export const Bar = styled('div')<{barHeight: number, state: string}>`
height: ${props => {
    switch(props.state) {
        case 'entering':
            return props.barHeight + 'px'
        case 'entered':
            return props.barHeight + 'px'
        case 'exiting':
            return 0
        case 'exited':
            return 0
        default:
            return props.barHeight + 'px'
    }
}};
width: 100%;
background: linear-gradient(220deg, #ff0000, #b91616);
background-size: 600% 600%;

-webkit-animation: ${redBarAnimation} 7s ease infinite;
-moz-animation: ${redBarAnimation} 7s ease infinite;
animation: ${redBarAnimation} 7s ease infinite;
transition: height 2s ease-in-out;
`

export const Label = styled('div')`
display: flex;
height: 2rem;
width: 100%;
justify-content: center;
overflow: hidden;
`

export const Deaths = styled('p')`
position: relative;
top: -1rem;
height: 1rem;
width: 100%;
text-align: center;
font-weight: bold;
transform: rotate(-45deg);
`