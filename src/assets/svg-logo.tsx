import React from "react";
import { Flex, FlexProps } from "rebass";

export const SvgLogo: React.FC<FlexProps & { svg: any, fill: string }> = ({ svg: Svg, fill, ...props }) => (
    <Flex {...props}>
        <Svg fill={fill} />
    </Flex>
)