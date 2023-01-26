import { type JSX, type Component } from "solid-js";
import classnames from "classnames";

export interface PgButtonProps {
    class?: string;
    children?: JSX.Element;
    styleType?: "progressive" | "regressive" | "destructive" | "aside",
    busy?: boolean;
};

export const PgButton: Component<PgButtonProps> = ({
    children,  
    styleType = "progressive", 
    busy = false,
    ...passthroughProps
}) => {
    const computedClasses = classnames(["pg-button", "pg-tabbable", passthroughProps.class], {
        "pg-button--progressive": styleType === "progressive",
        "pg-button--regressive": styleType === "regressive",
        "pg-button--destructive": styleType === "destructive",
        "pg-button--aside": styleType === "aside",
        "pg-button--busy": busy,
    });

    return (<button class={computedClasses} {...(busy ? { "aria-disabled": "true"} : {})}>
        {children}
    </button>);
};
