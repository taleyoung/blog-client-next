import React from "react";
import { Button } from "antd";

const Home = () => (
  <div>
    <h1 className="test">
      我是Next的首页
      <a href="">www</a>
      <Button type="primary"> hh</Button>
    </h1>
    <style jsx>
      {`
        .test {
          color: yellow;
        }
      `}
    </style>
  </div>
);
export default Home;
