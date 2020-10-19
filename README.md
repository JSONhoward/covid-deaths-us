# Covid-19 Deaths by State/Age

<img src='./src/images/covid-deaths-app.png' alt='project screenshot' width='500px' height='250px'>

Web app created with React displaying Covid-19 deaths by state/age

[View](https://us-covid19-deaths.web.app/)

## Install

```bash
yarn install
```

## Setup

This project pulls covid-19 data from a CDC provided API which can be found [HERE](https://dev.socrata.com/foundry/data.cdc.gov/9bhg-hcku)

Then provide API details in a ```.env``` file

```javascript
REACT_APP_API_SECRET=
REACT_APP_APP_TOKEN=
```

## Start

```bash
yarn start
```

## Built With

* [React](https://reactjs.org)
* [Typescript](https://www.typescriptlang.org/)
* [Styled-Components](https://styled-components.com/) (_styles_)
* [Recoil](https://recoiljs.org/) (_state management_)

## License

[MIT](https://choosealicense.com/licenses/mit/)
