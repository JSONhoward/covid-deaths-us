import React from 'react'

import { GraphOptionsContainer, Options, Button } from './GraphOptions.styled';

type Props = {
    handleOptions: (event: React.MouseEvent<HTMLButtonElement>) => void,
    options: string
}

const GraphOptions: React.FC<Props> = ({ handleOptions, options }) => {
    return (
        <GraphOptionsContainer>
            <Options>
                <p>Show Data by:</p>
                <Button active={options === 'state'} onClick={handleOptions} id={'state'}>State</Button>
                <Button active={options === 'age'} onClick={handleOptions} id={'age'}>Age</Button>
            </Options>
        </GraphOptionsContainer>
    )
}

export default GraphOptions
