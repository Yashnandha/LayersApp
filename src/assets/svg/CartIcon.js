import * as React from "react";
import Svg, { G, Rect, Path } from "react-native-svg";
const CartIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 12.883 12.883"
    {...props}
  >
    <G id="Group_5" data-name="Group 5" transform="translate(0.5 0.5)">
      <Rect
        id="Rectangle_6"
        data-name="Rectangle 6"
        width={11.883}
        height={11.883}
        rx={1.617}
        fill="none"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={1}
      />
      <Path
        id="Path_7"
        data-name="Path 7"
        d="M154.618-3.317a2.34,2.34,0,0,1-2.34,2.34,2.34,2.34,0,0,1-2.34-2.34"
        transform="translate(-146.336 5.694)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={1}
      />
    </G>
  </Svg>
);
export default CartIcon;
