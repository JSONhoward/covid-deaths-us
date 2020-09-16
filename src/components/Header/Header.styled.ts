import styled from 'styled-components'

export const HeaderContainer = styled('header')`
position: relative;
display: flex;
height: 4rem;
width: 100%;
color: red;
background-color: white;
box-shadow: 0px 1px 5px rgba(0,0,0,.5);
margin-bottom: .5rem;

h1 {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    text-shadow: 1px 1px 5px rgba(0,0,0,.25);
}

@media screen and (max-width: 400px) {
    font-size: .75rem;
}
`