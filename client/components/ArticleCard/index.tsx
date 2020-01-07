import React, { SFC } from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import css from "styled-jsx/css";

import ArticleInfo from "@components/ArticleInfo";

interface Props {
  id: number;
  title: string;
  content: string;
  time: string;
  tags?: Array<string>;
  toDetail: (id: number) => void;
}
const ArticleCard: SFC<Props> = ({
  id,
  title,
  content,
  tags,
  time,
  toDetail
}) => {
  return (
    <div className="card">
      <Card onClick={() => toDetail(id)}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className="avatar">
              {title.trim().slice(0, 1)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              {/* <MoreVertIcon /> */}
            </IconButton>
          }
          title={title}
          subheader={time}
          className="header"
        />
        {/* <CardMedia
          className="media"
          // image="/static/images/cards/paella.jpg"
          title="Paella dish"
        /> */}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* <ArticleInfo
            time={time}
            tags={tags}
            archives={["aa", "bb"]}
          ></ArticleInfo> */}
        </CardActions>
      </Card>
      <style jsx>{style}</style>
    </div>
  );
};

export default ArticleCard;

const style = css`
  .card {
    margin-bottom: 50px;
  }
  /* .card:hover {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    cursor: pointer;
  } */
  .avatar {
    background-color: #607d8b;
    text-transform: uppercase;
    color: "#fff";
  }
  .header {
    background: red;
  }
`;
