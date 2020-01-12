import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NextPage } from "next";
import css from "styled-jsx/css";
import { Timeline, Icon, Pagination } from "antd";
import myApi from "@utils/myApi";

interface Props {
  briefList: {
    data: Array<{ id: number; title: string; createAt: string }>;
    total: number;
  };
}
const Archive: NextPage<Props> = ({ briefList }) => {
  const { data, total } = briefList;
  const [list, setList] = useState(data);
  const [listTotal, setListTotal] = useState(total);

  //   useEffect(() => {
  //     setList(data);
  //     setListTotal(total);
  //   }, [briefList]);

  const pageChange = async (page: number) => {
    const res = await myApi(`article/briefList?page=${page}&page_size=20`);
    setList(res.data);
    setListTotal(res.total);
  };

  const isOtherYear = () => {};

  return (
    <div className="container">
      <Timeline mode="left">
        <Timeline.Item
          dot={
            <Icon
              type="highlight"
              theme="twoTone"
              style={{ fontSize: "25px" }}
            />
          }
        >
          <div className="title">Keep coding!</div>
        </Timeline.Item>
        {list.map(item => (
          <Timeline.Item key={item.id}>
            <span className="time"> {item.createAt}</span>
            <Link
              href={{
                pathname: "/article",
                query: { id: item.id }
              }}
            >
              <a>{item.title}</a>
            </Link>
          </Timeline.Item>
        ))}
      </Timeline>
      <div className="pagination">
        <Pagination
          pageSize={20}
          defaultCurrent={1}
          total={listTotal}
          size="small"
          onChange={page => pageChange(page)}
        />
      </div>
      <style jsx>{style}</style>
    </div>
  );
};
Archive.getInitialProps = async () => {
  const briefList = await myApi("article/briefList?page=1&page_size=20");
  return { briefList };
};
export default Archive;

const style = css`
  .container {
    width: 100%;
    margin-top: 40px;
  }
  .time {
    margin-right: 10px;
  }
  .title {
    font-size: 25px;
    font-weight: bold;
    margin: -5px 0 0 10px;
  }
`;
