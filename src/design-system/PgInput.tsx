import { type Component } from "solid-js";
import classnames from "classnames";

export interface PgInputProps {
  class?: string;
  value?: string;
  invalid?: boolean;
  readonly?: boolean;
}

export const PgInput: Component<PgInputProps> = ({
  value,
  invalid = false,
  readonly = false,
  ...passthroughProps
}) => {
  const computedClasses = classnames(
    ["pg-input", "pg-tabbable", passthroughProps.class],
    {
      "pg-input--invalid": invalid,
      "pg-input--readonly": readonly,
    }
  );

  return (
    <input
      value={value}
      class={computedClasses}
      readonly={readonly}
      {...(invalid ? { "aria-invalid": "true" } : {})}
    />
  );
};
