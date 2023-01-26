import { type JSX, type Component } from "solid-js";
import classnames from "classnames";

export interface PgAdmonitionProps {
    class?: string;
    children?: JSX.Element;
    styleType?: "success" | "info" | "warning" | "critical",
};

export const PgAdmonition: Component<PgAdmonitionProps> = ({
    styleType = "info",
    children,
    ...passthroughProps
}) => {
    const computedClasses = classnames(["pg-admonition", passthroughProps.class], {
        "pg-admonition--success": styleType === "success",
        "pg-admonition--info": styleType === "info",
        "pg-admonition--warning": styleType === "warning",
        "pg-admonition--critical": styleType === "critical",
    });

    return <div class={computedClasses}>{children}</div>;
};
