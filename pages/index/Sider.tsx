import React, { FC } from "react";
import Link from "next/link";
import { Divider, Timeline, Radio } from "antd";

interface Props {
  cateList: Array<{ category: string }>;
  category: string;
  tagList: Array<{ id: string; name: string }>;
  currentArticles: Array<{ id: string; title: string; createAt: string }>;
}

const Sider: FC<Props> = ({ cateList, category, currentArticles }) => (
  <>
    <Divider>文章归类</Divider>
    <Radio.Group
      value={category ? category : "全部"}
      defaultValue={category ? category : "全部"}
      buttonStyle="solid"
    >
      <Link href="/">
        <Radio.Button value="全部" style={{ margin: "10px" }}>
          全部文章
        </Radio.Button>
      </Link>
      {cateList &&
        cateList.map(item => (
          <Link
            href={{
              pathname: "/",
              query: { cate: encodeURIComponent(item.category) }
            }}
            key={item.category}
          >
            <Radio.Button style={{ margin: "5px" }} value={item.category}>
              {item.category}
            </Radio.Button>
          </Link>
        ))}
    </Radio.Group>
    {/* <Divider>标签云</Divider>
    {tagList.map(tag => (
      <Tag color="blue" key={tag.name}>
        {tag.name}
      </Tag>
    ))} */}
    <Divider>近期文章</Divider>
    <Timeline>
      {currentArticles &&
        currentArticles.map(article => (
          <Timeline.Item key={article.id}>
            <Link
              href={{
                pathname: "/article",
                query: { id: article.id }
              }}
            >
              <a>{article.title}</a>
            </Link>
          </Timeline.Item>
        ))}
    </Timeline>
  </>
);

export default Sider;
