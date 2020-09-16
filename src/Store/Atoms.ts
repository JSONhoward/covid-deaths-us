import {atom} from 'recoil'

export const CovidApi = atom({
    key: 'covidApi',
    default: {
        state: `https://data.cdc.gov/resource/9bhg-hcku.json?$select=data_as_of, state, age_group_new, covid_19_deaths&$where=state != 'United States' AND state != 'Puerto Rico'&sex=All%20Sexes&$order=covid_19_deaths DESC`,
        age: `https://data.cdc.gov/resource/9bhg-hcku.json?$select=data_as_of,sex, age_group_new, state, covid_19_deaths&$where=state == 'United States' AND age_group_new != 'All Ages' AND sex == 'All Sexes'&$order=covid_19_deaths DESC`
    }
})