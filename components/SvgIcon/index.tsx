import React, { SFC } from "react";

interface Props {
  type: string;
  className?: string;
  style?: {};
}
// iconfont svg
const SvgIcon: SFC<Props> = props => {
  return (
    <svg
      className={`svg-icon ${props.className}`}
      aria-hidden="true"
      style={props.style}
    >
      <use xlinkHref={`#${props.type}`} />
    </svg>
  );
};

export default SvgIcon;
