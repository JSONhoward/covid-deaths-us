import React from 'react'

import CovidSpinner from '../../images/covid-image.png'
import { SpinnerContainer } from './Spinner.styled';

const Spinner = () => {
    return (
        <SpinnerContainer>
            <img data-testid='loadingSpinnerImage' src={CovidSpinner} alt={'Covid-19 Virus'} />
        </SpinnerContainer>
    )
}

export default Spinner
