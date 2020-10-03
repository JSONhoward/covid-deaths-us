import React from 'react'
import {FaGithub} from 'react-icons/fa'

import { FooterContainer } from './Footer.styled';

export const GithubLink = 'https://github.com/JSONhoward/covid-deaths-us'

const Footer = () => {
    return (
        <FooterContainer>
            <p>Copyright &copy;{new Date().getFullYear()} U.S. Covid-19 Deaths</p>
            <a data-testid='githubLink' href={GithubLink} rel="noopener noreferrer" target={'_blank'}><FaGithub size={'2rem'} /> Github Repo</a>
        </FooterContainer>
    )
}

export default Footer
