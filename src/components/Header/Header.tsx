import React from 'react'
import { HeaderContainer } from './Header.styled';

export const HeaderText = 'U.S. Covid-19 Deaths'

const Header = () => {
    return (
        <HeaderContainer>
            <h1>{HeaderText}</h1>
        </HeaderContainer>
    )
}

export default Header
