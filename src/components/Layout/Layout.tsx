import React from 'react'

import Header from '../Header'
import Footer from '../Footer'
import { LayoutContainer } from './Layout.styled';

const Layout: React.FC = ({ children }) => {
    return (
        <LayoutContainer>
            <Header />
            {children}
            <Footer />
        </LayoutContainer>
    )
}

export default Layout
