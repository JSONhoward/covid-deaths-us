import React from 'react'
import {create} from 'react-test-renderer'
import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Spinner from './'
import CovidSpinner from '../../images/covid-image.png'

describe('Spinner Tests',() => {
    test('Snapshot Test', () => {
        const tree = create(<Spinner />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Spinner Image is Rendered', () => {
        render(<Spinner />)

        expect(screen.getByTestId('loadingSpinnerImage')).toHaveAttribute('src', CovidSpinner)
    })
})