import React, { FC } from "react";
import Link from "next/link";
import { List, Avatar } from "antd";
import { ArticleDetail } from "@itypings/store";
import ArticleInfo from "@components/ArticleInfo";

interface Props {
  data: Array<ArticleDetail>;
}

const Articles: FC<Props> = ({ data }) => (
  <List
    itemLayout="vertical"
    size="large"
    dataSource={data}
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <ArticleInfo
            time={item.updatedAt}
            tags={item.tags}
            category={item.category}
            isTime={false}
          ></ArticleInfo>
        ]}
        // extra={
        //   <img
        //     width={200}
        //     alt="logo"
        //     src="/static/article2.jpg"
        //     className="extra-img"
        //   />
        // }
      >
        <List.Item.Meta
          avatar={
            <Avatar style={{ color: "#fff", backgroundColor: "#556cd6" }}>
              {item.title.trim().slice(0, 1)}
            </Avatar>
          }
          title={
            <Link
              href={{
                pathname: "/article",
                query: { id: item.id }
              }}
            >
              <a> {item.title}</a>
            </Link>
          }
          description={item.updatedAt}
        />
        {item.content}
        <Link
          href={{
            pathname: "/article",
            query: { id: item.id }
          }}
        >
          <a style={{ color: "#556cd6" }}> 查看全文</a>
        </Link>
        <style jsx>
          {`
            .extra-img {
              border-radius: 10px;
            }
          `}
        </style>
      </List.Item>
    )}
  />
);

export default Articles;
