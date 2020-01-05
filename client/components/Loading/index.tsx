import React, { SFC } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading: SFC = () => (
  <div className="container">
    <CircularProgress color="secondary" />
    <style jsx>{`
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 400px;
      }
    `}</style>
  </div>
);

export default Loading;
