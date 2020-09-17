import styled from 'styled-components'

export const HeaderContainer = styled('header')`
position: relative;
display: flex;
align-items: center;
height: 4rem;
width: 100%;
color: red;
background-color: white;
box-shadow: 0px 1px 5px rgba(0,0,0,.5);
margin-bottom: .5rem;

h1 {
    text-shadow: 1px 1px 5px rgba(0,0,0,.25);
    margin-left: 2rem;
}

@media screen and (max-width: 400px) {
    font-size: .75rem;
}

@media screen and (max-width: 600px) {
    justify-content: center;
}
`