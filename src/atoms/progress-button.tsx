import React from "react";
import { ButtonProps } from "rebass";
import { LoadingIndicator } from "./loading";
import { MButton } from "./mbutton";

export const ProgressButton: React.FC<ButtonProps & { scope: string }> = ({ children, scope, ...rest }) => {
    return (
        <MButton {...rest}>
    		<LoadingIndicator scope={scope}>
	    		{children}
		    </LoadingIndicator>
        </MButton>
    )
}