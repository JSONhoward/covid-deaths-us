import React from 'react'
import {create} from 'react-test-renderer'
import {screen, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GraphBar from './'

describe('GraphBar Tests', () => {
    test('Snapshot Test', () => {
        const height = 1000,
        visible = true,
        option = 'test option',
        data = {
            "data_as_of": "2020-09-16T00:00:00.000",
            "start_week": "2020-02-01T00:00:00.000",
            "end_week": "2020-09-12T00:00:00.000",
            "state": "New York City",
            "sex": "All Sexes",
            "age_group_new": "All Ages",
            "covid_19_deaths": "20686",
            "total_deaths": "59803",
            "pneumonia_deaths": "11055",
            "pneumonia_and_covid_19_deaths": "7947",
            "influenza_deaths": "967",
            "pneumonia_influenza_or_covid": "23928"
          }

        const tree = create(<GraphBar height={height} visible={visible} option={option} data={data} />).toJSON()

        expect(tree).toMatchSnapshot()
    })
})