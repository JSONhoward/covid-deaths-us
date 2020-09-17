import styled from 'styled-components'

export const TooltipContainer = styled('div')`
position: absolute;
visibility: hidden;
display: flex;
flex-direction: column;
min-height: 100px;
width: 250px;
background-color: rgb(20,20,20);
border-radius: 5px;
`

export const TooltipStat = styled('div')`
display: flex;
justify-content: space-between;
width: 100%;
color: white;
`