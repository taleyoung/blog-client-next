import React, { FC, ReactNode } from "react";
import Grow from "@material-ui/core/Grow";

interface Props {
  //   Children: ReactNode;
}

const TransitionWrap: FC<Props> = ({ children }) => (
  <Grow in={true} style={{ transformOrigin: "50% 0 0" }}>
    {children}
  </Grow>
);

export default TransitionWrap;
