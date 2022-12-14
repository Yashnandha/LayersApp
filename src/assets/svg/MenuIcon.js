import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MenuIcon = (props) => (
  <Svg
    aria-hidden="true"
    focusable="false"
    role="presentation"
    className="icon icon-hamburger"
    viewBox="0 0 37 40"
    height={25}
    width={25}
    fill={'#ffffff'}
    {...props}
  >
    <Path d="M33.5 25h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2zm0-11.5h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2zm0 23h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2z" />
  </Svg>
);
export default MenuIcon;
