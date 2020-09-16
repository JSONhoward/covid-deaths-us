import styled from 'styled-components'

export const MainListContainer = styled('div')`
position: relative;
display: flex;
height: 100%;
width: 100%;
overflow-y: hidden;
overflow-x: auto;
box-shadow: inset 1px 1px 15px rgba(0,0,0,.5);
background-color: white;
`

export const LabelContainer = styled('div')`
position: relative;
display: flex;
flex-direction: column;
height: 90vh;
min-height: 400px;
width: 90vw;
margin: auto;
margin-top: 0;
padding: 0 1rem 1rem 1rem;
`

export const LabelY = styled('p')`
display: inline-block;
position: absolute;
top: 60%;
left: .5rem;
transform: rotate(-90deg);
transform-origin: left;
`

export const LabelX = styled('p')`
display: inline-block;
position: absolute;
bottom: 0rem;
left: 50%;
transform: translateX(-50%);
`