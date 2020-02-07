import React, { FC } from "react";
import Link from "next/link";
import { List, Avatar } from "antd";
import { ArticleDetail } from "@itypings/store";
import ArticleInfo from "@components/ArticleInfo";
import { useMdToBrief } from "@utils/mdToHtml";

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
          <div>
            <ArticleInfo
              time={item.updatedAt}
              tags={item.tags}
              category={item.category}
              isTime={true}
            ></ArticleInfo>
            {/* {item.updatedAt} */}
          </div>
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
          title={
            <Link
              href={{
                pathname: "/article",
                query: { id: item.id }
              }}
            >
              <a className="title">{item.title}</a>
            </Link>
          }
        />
        <div className="content-wrap">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: useMdToBrief(item.content) }}
          />
          <Link
            href={{
              pathname: "/article",
              query: { id: item.id }
            }}
          >
            <a style={{ color: "#556cd6" }}> 查看全文</a>
          </Link>
        </div>
        <style jsx>
          {`
            .extra-img {
              border-radius: 10px;
            }
            .title {
              color: rgba(0, 0, 0, 0.65);
              font-size: 1.6em;
            }
            .content-wrap {
              background-color: #eee;
              padding: 20px;
              border-radius: 5px;
            }
          `}
        </style>
      </List.Item>
    )}
  />
);

export default Articles;
