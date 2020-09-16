import React from 'react'
import { FooterContainer } from './Footer.styled';

const Footer = () => {
    return (
        <FooterContainer>
            <p>Copyright &copy;{new Date().getFullYear()} U.S. Covid-19 Deaths</p>
        </FooterContainer>
    )
}

export default Footer
