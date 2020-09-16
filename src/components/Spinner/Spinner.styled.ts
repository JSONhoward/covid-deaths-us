import styled, {keyframes} from 'styled-components'

const rotateSpinner = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`

export const SpinnerContainer = styled('div')`
position: absolute;
display: grid;
place-items: center;
height: 100%;
width: 100%;

svg {
    animation: 2s ${rotateSpinner} linear;
}
`