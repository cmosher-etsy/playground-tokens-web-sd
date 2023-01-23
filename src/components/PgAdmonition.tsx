import { type JSX, type Component } from "solid-js";
import classnames from "classnames";

export interface PgAdmonitionProps {
    class?: string;
    children?: JSX.Element;
    styleType?: "celebrate" | "info" | "caution" | "error",
};

export const PgAdmonition: Component<PgAdmonitionProps> = ({
    styleType = "info",
    children,
    ...passthroughProps
}) => {
    const computedClasses = classnames(["pg-admonition", passthroughProps.class], {
        "pg-admonition--celebrate": styleType === "celebrate",
        "pg-admonition--info": styleType === "info",
        "pg-admonition--caution": styleType === "caution",
        "pg-admonition--error": styleType === "error",
    });

    return <div class={computedClasses}>{children}</div>;
};
