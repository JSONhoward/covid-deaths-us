type StateAbbreviations = { 'name': string, 'abbreviation': string }[]

type InitialResponseType = {
    data_as_of: string,
    start_week: string,
    end_week: string,
    state: string,
    covid_19_deaths: number | string,
    age_group_new: string,
    sex: string,
    total_deaths: string,
    pneumonia_deaths: string,
    pneumonia_and_covid_19_deaths: string,
    influenza_deaths?: string,
    pneumonia_influenza_or_covid: string,
    footnote?: string
}

type TransformedData = {
    data: InitialResponseType[],
    limitedData: InitialResponseType[],
    min: number,
    max: number,
    cleanData: InitialResponseType[],
    updated?: any
}

type FetchCovidDataType = {
    [state: string]: TransformedData,
    [age: string]: TransformedData
}