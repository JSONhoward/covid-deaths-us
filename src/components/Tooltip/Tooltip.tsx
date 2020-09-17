import React from 'react'
import { TooltipContainer, TooltipStat } from './Tooltip.styled';

type Props = {
    total: InitialResponseType['total_deaths'],
    pneumoniaFluCovid: InitialResponseType['pneumonia_influenza_or_covid'],
    pneumonia: InitialResponseType['pneumonia_deaths'],
    covid: InitialResponseType['covid_19_deaths'],
    pneumoniaCovid: InitialResponseType['pneumonia_and_covid_19_deaths'],
    flu: InitialResponseType['influenza_deaths']
}

const Tooltip = (props: Props) => {
    return (
        <TooltipContainer {...props}>
            <TooltipStat><p>Total:</p><p>{props.total}</p></TooltipStat>
            <TooltipStat><p>Pneumonia, Influenza, or Covid-19:</p><p>{props.pneumoniaFluCovid}</p></TooltipStat>
            <TooltipStat><p>Pneumonia:</p><p>{props.pneumonia}</p></TooltipStat>
            <TooltipStat><p>Covid-19:</p><p>{props.covid}</p></TooltipStat>
            <TooltipStat><p>Pneumonia and Covid-19:</p><p>{props.pneumoniaCovid}</p></TooltipStat>
            <TooltipStat><p>Influenza:</p><p>{props.flu}</p></TooltipStat>
        </TooltipContainer>
    )
}

export default Tooltip
