import React, { SFC } from "react";
import { Breadcrumb } from "antd";
const { Item } = Breadcrumb;

interface Props {
  list: Array<string>;
}

const BreadCrumb: SFC<Props> = props => (
  <>
    <Breadcrumb className="container">
      {props.list.map(item => (
        <Item key={item}>{item}</Item>
      ))}
    </Breadcrumb>
    <style jsx>
      {`
        .container {
          margin: 16px 0;
        }
      `}
    </style>
  </>
);

export default BreadCrumb;
