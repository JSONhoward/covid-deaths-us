import { atom } from "recoil";

export const CovidApi = atom({
  key: "covidApi",
  default: {
    state: `https://data.cdc.gov/resource/9bhg-hcku.json?$where=state != 'United States' AND state != 'Puerto Rico'&sex=All%20Sexes&$order=covid_19_deaths DESC`,
    age: `https://data.cdc.gov/resource/9bhg-hcku.json?$where=state == 'United States' AND age_group != 'All Ages' AND sex == 'All Sexes'&$order=covid_19_deaths DESC`,
  },
});
