type StateAbbreviations = {'name': string, 'abbreviation': string}[]

type InitialResponseType = {data_as_of: string, state: string, covid_19_deaths: number | string, age_group_new: string, sex?: string}

type TransformedData = {
    data: InitialResponseType[],
    limitedData: InitialResponseType[],
    min: number,
    max: number,
    cleanData: InitialResponseType[]
}

type FetchCovidDataType = {
    [state: string]: TransformedData,
    [age: string]: TransformedData
}