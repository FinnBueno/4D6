import React from "react";
import { Heading } from "rebass";
import { SvgLogo } from "src/assets/svg-logo";
import { ReactComponent as D20 } from "src/assets/d20.svg";

export const LargeLogo: React.FC<{}> = () => (
    <>
        <SvgLogo svg={D20} width='120px' fill='#CDB380' mb={2} />
        <Heading variant='heading1' mb={1}>4D6</Heading>
    </>
)