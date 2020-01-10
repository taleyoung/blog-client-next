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
const TimeLine: NextPage<Props> = ({ briefList }) => {
  const [list, setList] = useState([]);
  const [listTotal, setListTotal] = useState();
  const { data, total } = briefList;

  useEffect(() => {
    setList(data);
    setListTotal(total);
  }, [briefList]);

  const pageChange = async (page: number) => {
    const res = await myApi(`article/briefList?page=${page}&page_size=20`);
    setList(res.data);
    setListTotal(res.total);
  };

  return (
    <div className="container">
      <Timeline mode="left">
        {list.map(item => (
          <Timeline.Item
            dot={<Icon type="clock-circle-o" style={{ fontSize: "16px" }} />}
            key={item.id}
          >
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
TimeLine.getInitialProps = async () => {
  const briefList = await myApi("article/briefList?page=1&page_size=20");
  return { briefList };
};
export default TimeLine;

const style = css`
  .container {
    width: 100%;
    margin-top: 40px;
  }
  .time {
    margin-right: 10px;
  }
`;
