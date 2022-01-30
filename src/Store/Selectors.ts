import { selector } from "recoil";
import { CovidApi } from "./Atoms";
import { transformData } from "../Utils/helpers";

export const FetchCovidData = selector({
  key: "fetchCovidData",
  get: async ({ get }) => {
    const URLS = get(CovidApi);

    const stateResponse = await fetch(URLS.state, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-App-Token": process.env.REACT_APP_APP_TOKEN!,
      },
    });

    const ageResponse = await fetch(URLS.age, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-App-Token": process.env.REACT_APP_APP_TOKEN!,
      },
    });

    const stateData = await stateResponse.json();
    const ageData = await ageResponse.json();

    return {
      state: transformData(stateData),
      age: transformData(ageData),
    };
  },
});
