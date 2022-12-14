import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const CloseIcon = (props) => (
  <Svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    height={25}
    width={25}
    {...props}
  >
    <G
      id="Page-3"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="square"
    >
      <G
        id="Menu-shoppingcart"
        transform="translate(-428.000000, -40.000000)"
        fillRule="nonzero"
        stroke="#000000"
        strokeWidth={3}
      >
        <Path d="M431,43 L445,57 M445,43 L431,57" id="icon-close" />
      </G>
    </G>
  </Svg>
);
export default CloseIcon;
