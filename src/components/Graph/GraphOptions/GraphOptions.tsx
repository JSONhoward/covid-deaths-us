import React from "react";

import {
  GraphOptionsContainer,
  Options,
  Button,
  StatDate,
} from "./GraphOptions.styled";

type Props = {
  handleOptions: (event: React.MouseEvent<HTMLButtonElement>) => void;
  options: string;
  dateUpdated: string;
};

const GraphOptions: React.FC<Props> = ({
  handleOptions,
  options,
  dateUpdated,
}) => {
  return (
    <GraphOptionsContainer>
      <Options>
        <p>Data shown by:</p>
        <Button
          data-testid="ageButton"
          active={options === "age"}
          onClick={handleOptions}
          id={"age"}
        >
          Age
        </Button>
      </Options>
      <StatDate data-testid="updatedDate">
        statistics updated as of {dateUpdated}
      </StatDate>
    </GraphOptionsContainer>
  );
};

export default GraphOptions;
