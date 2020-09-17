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
position: relative;
display: grid;
place-items: center;
height: 100%;
min-height: calc(100vh - 8rem);
width: 100%;

img {
    height: 5rem;
    width: auto;
    animation: 2s ${rotateSpinner} linear;
}
`