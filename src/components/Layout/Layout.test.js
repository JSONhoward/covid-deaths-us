import React from 'react'
import {create} from 'react-test-renderer'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Layout from './'

describe('Layout Tests', () => {
    test('Snapshot Test', () => {
        const tree = create(<Layout />).toJSON()

        expect(tree).toMatchSnapshot()
    })

    test('Renders Children', () => {
        const TestDiv = () => <div data-testid='testDiv'>Testing...</div>

        render(<Layout><TestDiv /></Layout>)

        expect(screen.getByTestId('testDiv')).toBeInTheDocument()
    })
})