import styled from 'styled-components';

export const GraphOptionsContainer = styled('div')`
position: relative;
flex-direction: column;
align-items: center;
justify-content: center;
display: flex;
height: 3rem;
width: 100%;
`

export const Button = styled('button')<{active: boolean}>`
height: 2rem;
width: 4rem;
margin: 0 2px;
border: none;
box-shadow: 1px 1px 5px rgba(0,0,0,.25);
color: ${props => props.active ? 'white' : 'black'};
background-color: ${props => props.active ? 'red' : 'none' };
cursor: pointer;
`

export const Options = styled('div')`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
`

export const StatDate = styled('div')`
height: 1rem;
width: 100%;
text-align: right;
font-size: .75rem;
font-style: italic;
`