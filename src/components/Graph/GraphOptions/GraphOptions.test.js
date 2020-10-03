import { render, screen } from '@testing-library/react'
import React from 'react'
import {create} from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import GraphOptions from './'

describe('GraphOptions Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<GraphOptions />)

        expect(tree).toMatchSnapshot()
    })

    test('Renders Props', () => {
        const testHandleOptions = jest.fn(() => console.log('handle options')),
        testOptions = 'test options',
        testDateUpdated = 'test date updated'

        render(<GraphOptions handleOptions={testHandleOptions} options={testOptions} dateUpdated={testDateUpdated} />)

        expect(screen.getByTestId('updatedDate')).toBeInTheDocument()
        expect(screen.getByTestId('stateButton')).toHaveAttribute('id', 'state')
        expect(screen.getByTestId('ageButton')).toHaveAttribute('id', 'age')
    })
})