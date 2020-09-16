import React from 'react'
import { SpinnerContainer } from './Spinner.styled';
import {FaSpinner} from 'react-icons/fa'

const Spinner = () => {
    return (
        <SpinnerContainer>
            <FaSpinner size={'5rem'} />
        </SpinnerContainer>
    )
}

export default Spinner
