import styled from 'styled-components'

export const FooterContainer = styled('footer')`
display: flex;
align-items: center;
justify-content: space-around;
height: 4rem;
width: 100%;
background-color: white;
box-shadow: 0px -1px 5px rgba(0,0,0,.5);
margin-top: 1rem;

a, a:visited, a:active {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
}

svg {
    margin: .5rem;
}

@media screen and (max-width: 600px) {
    flex-direction: column-reverse;
}
`