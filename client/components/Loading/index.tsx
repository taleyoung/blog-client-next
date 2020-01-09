import React, { SFC } from "react";
import { Spin, Icon } from "antd";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

interface Props {
  loading: boolean;
}

const Loading: SFC<Props> = ({ loading }) => (
  <Spin spinning={loading} indicator={antIcon} />
);

export default Loading;
