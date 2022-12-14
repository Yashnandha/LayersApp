import * as React from "react";
import Svg, { G, Path, Line } from "react-native-svg";
const SearchIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 13.115 13.09"
    fill={'#ffffff'}
    {...props}
  >
    <G id="Group_4" data-name="Group 4" transform="translate(0.5 0.5)">
      <Path
        id="Path_5"
        data-name="Path 5"
        d="M11.536,13.217a4.355,4.355,0,1,1,1.584-1.584"
        transform="translate(-5 -5.097)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
      <Path
        id="Path_6"
        data-name="Path 6"
        d="M7.171,5.684A4.355,4.355,0,1,1,5.587,7.268"
        transform="translate(-5 -5.097)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
      <Line
        id="Line_1"
        data-name="Line 1"
        x2={3.2}
        y2={3.2}
        transform="translate(8.707 8.683)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
    </G>
  </Svg>
);
export default SearchIcon;
