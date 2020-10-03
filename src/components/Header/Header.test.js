import React from 'react'
import {create} from 'react-test-renderer'
import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './'
import { HeaderText } from './Header'

describe('Header Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<Header />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Renders Title', () => {
        render(<Header />)

        expect(screen.getByText(HeaderText)).toBeInTheDocument()
    })
})