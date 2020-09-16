import styled from 'styled-components';

export const GraphOptionsContainer = styled('div')`
position: relative;
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

export const Dropdown = styled('select')`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
height: 2rem;
border: none;
font-family: sans-serif;
font-size: 1rem;
box-shadow: 1px 1px 5px rgba(0,0,0,.25);
-moz-appearance: none;
-webkit-appearance: none;
appearance: none;
box-sizing: border-box;
margin: 5px;
padding: 0 .5rem;

&:hover {
    border: 1px solid rgba(0,0,0,.25);
    margin-left: 4px;
}

option {
    background-color: blue;
    margin: auto;
    text-align: center;
}
`

export const Options = styled('div')`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
`

export const Update = styled('div')`
position: absolute;
top: 50%;
right: 0;
transform: translateY(-50%);
display: flex;
align-items: center;
justify-content: center;
flex: .5;
`