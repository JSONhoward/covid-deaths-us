export const stateAbbr: StateAbbreviations = [
  {
    name: "District of Columbia",
    abbreviation: "D.C.",
  },
  {
    name: "New York City",
    abbreviation: "NYC",
  },
  {
    name: "Alabama",
    abbreviation: "AL",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
  },
  {
    name: "American Samoa",
    abbreviation: "AS",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
  },
  {
    name: "California",
    abbreviation: "CA",
  },
  {
    name: "Colorado",
    abbreviation: "CO",
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
  },
  {
    name: "Delaware",
    abbreviation: "DE",
  },
  {
    name: "District Of Columbia",
    abbreviation: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    abbreviation: "FM",
  },
  {
    name: "Florida",
    abbreviation: "FL",
  },
  {
    name: "Georgia",
    abbreviation: "GA",
  },
  {
    name: "Guam",
    abbreviation: "GU",
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
  },
  {
    name: "Idaho",
    abbreviation: "ID",
  },
  {
    name: "Illinois",
    abbreviation: "IL",
  },
  {
    name: "Indiana",
    abbreviation: "IN",
  },
  {
    name: "Iowa",
    abbreviation: "IA",
  },
  {
    name: "Kansas",
    abbreviation: "KS",
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
  },
  {
    name: "Maine",
    abbreviation: "ME",
  },
  {
    name: "Marshall Islands",
    abbreviation: "MH",
  },
  {
    name: "Maryland",
    abbreviation: "MD",
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
  },
  {
    name: "Michigan",
    abbreviation: "MI",
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
  },
  {
    name: "Missouri",
    abbreviation: "MO",
  },
  {
    name: "Montana",
    abbreviation: "MT",
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
  },
  {
    name: "Nevada",
    abbreviation: "NV",
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
  },
  {
    name: "New York",
    abbreviation: "NY",
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
  },
  {
    name: "Northern Mariana Islands",
    abbreviation: "MP",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
  },
  {
    name: "Oregon",
    abbreviation: "OR",
  },
  {
    name: "Palau",
    abbreviation: "PW",
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
  },
  {
    name: "Puerto Rico",
    abbreviation: "PR",
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
  },
  {
    name: "Texas",
    abbreviation: "TX",
  },
  {
    name: "Utah",
    abbreviation: "UT",
  },
  {
    name: "Vermont",
    abbreviation: "VT",
  },
  {
    name: "Virgin Islands",
    abbreviation: "VI",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
  },
  {
    name: "Washington",
    abbreviation: "WA",
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
  },
];

export const transformData = (
  resData: InitialResponseType[]
): TransformedData => {
  const arr = resData.length > 0 ? [...resData] : [];
  const ages: any[] = [];
  const cleanedArr = arr.filter((el) => {
    if (ages.includes(el.age_group)) {
      return false;
    } else {
      ages.push(el.age_group);
      return true;
    }
  });
  return {
    data: cleanedArr,
    get limitedData() {
      let arr = [...this.data];
      arr.length = 10;
      return arr;
    },
    get min() {
      const num =
        +this.data[this.data.length - 1]["total_deaths"] -
        (+(this.data[this.data.length - 1]?.influenza_deaths || 0) -
          +(this.data[this.data.length - 1]?.pneumonia_deaths || 0));
      return Number(num);
    },
    get max() {
      const num =
        +this.data[0]["total_deaths"] -
        (+(this.data[0]?.influenza_deaths || 0) -
          +(this.data[0]?.pneumonia_deaths || 0));
      return Number(num);
    },
    get cleanData() {
      const arr = [...this.data]?.map((el) => {
        const abbr = stateAbbr.filter((el2) => {
          return el2.name === el.state;
        })[0]?.abbreviation;
        const obj = {
          ...el,
          covid_19_deaths:
            +el.total_deaths -
            (+(el.influenza_deaths || 0) + +(el.pneumonia_deaths || 0)),
          state: abbr || el.state,
          age_group_new: el.age_group.replace(
            /(under|and|over|years|year| )/gi,
            ""
          ),
        };
        return obj;
      });
      return arr;
    },
    get updated() {
      let date = new Date(this.data[0]["data_as_of"]).toLocaleDateString();
      return date;
    },
  };
};

const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;
const clamp = (a: number, min = 0, max = 1) => Math.min(max, Math.max(min, a));
const invertLerp = (x: number, y: number, a: number) =>
  clamp((a - x) / (y - x));
export const range = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  a: number
) => lerp(x2, y2, invertLerp(x1, y1, a));
export const barLabels = (() => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(undefined);
  }
  return arr;
})();
