import React, { SFC } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
// import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import css from "styled-jsx/css";

import ArticleInfo from "@components/ArticleInfo";
import { List, Avatar, Icon } from "antd";

interface Props {
  id: number;
  title: string;
  content: string;
  category: string;
  time: string;
  tags?: Array<string>;
  toDetail: (id: number) => void;
}
const ArticleCard: SFC<Props> = ({
  id,
  title,
  content,
  category,
  tags,
  time,
  toDetail
}) => {
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      title,
      // avatar:
      //   "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content
    });
  }
  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
  return (
    <div className="card">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <ArticleInfo
                time={time}
                tags={tags}
                category={category}
              ></ArticleInfo>
            ]}
            extra={
              <img
                width={300}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
      <style jsx>{style}</style>
    </div>
  );
};

export default ArticleCard;

const style = css`
  /* .card {
    margin-bottom: 50px;
  }
  .card:hover {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    cursor: pointer;
  }
  .avatar {
    background-color: "#556cd6";
    text-transform: uppercase;
    color: "#556cd6";
  }
  .header {
    background: red;
  } */
`;
