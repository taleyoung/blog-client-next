import React, { FC } from "react";
import Link from "next/link";
import { Divider, Button, Menu, Icon, Tag, Timeline } from "antd";

interface Props {
  cateList: Array<{ category: string }>;
  tagList: Array<{ id: string; name: string }>;
  currentArticles: Array<{ id: string; title: string; createAt: string }>;
}

const Sider: FC<Props> = ({ cateList, tagList, currentArticles }) => (
  <>
    <Divider>文章归类</Divider>
    <Menu theme="light" mode="inline" defaultSelectedKeys={["全部"]}>
      <Menu.Item key="全部">
        <Link href="">
          <div>
            <Icon type="user" />
            <span className="nav-text">全部</span>
          </div>
        </Link>
      </Menu.Item>
      {cateList &&
        cateList.map(item => (
          <Menu.Item key={item.category}>
            <Link
              href={{
                pathname: "/",
                query: { cate: encodeURIComponent(item.category) }
              }}
            >
              <div>
                <Icon type="user" />
                <span className="nav-text">{item.category}</span>
              </div>
            </Link>
          </Menu.Item>
        ))}
    </Menu>
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
