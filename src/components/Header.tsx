import { type Component } from "solid-js";

export interface HeaderProps {}

export const Header: Component<HeaderProps> = (_props) => {
  return (
    <header class="pg-m-6 flex justify-end sticky top-0">
      <label class="align-self-end">
        Light/Dark:
        <input id="darkMode" type="checkbox" checked />
      </label>
    </header>
  );
};
