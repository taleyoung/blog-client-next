import React, { SFC, useState, useEffect } from "react";
import { Avatar, Divider, Tag } from "antd";
import myApi from "@utils/myApi";
// import avatar1 from "@static/img/avatar1.jpeg";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
// import Divider from '@material-ui/core/Divider';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

export interface IProp {
  tags?: any[];
}

interface Next {
  getInitialProps: any;
}

const SideBar: SFC<IProp> & Next = ({ tags = [] }) => {
  // const [tags, setTags] = useState([]);
  // useEffect(() => {
  //   const fetch = async () => {
  //     const res = await myApi("tag");
  //     setTags(res);
  //   };
  //   fetch();
  // }, []);
  const drawerWidth = 300;

  const useStyles: any = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex"
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        [theme.breakpoints.up("sm")]: {
          width: drawerWidth,
          flexShrink: 0
        }
      },
      drawerPaper: {
        width: drawerWidth
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3)
      },
      toolbar: theme.mixins.toolbar
    })
  );
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
    // <div className="container">
    //   {/* <Avatar
    //     src="/static/img/avatar1.jpeg"
    //     size="large"
    //     className={style.avatar}
    //   ></Avatar> */}
    //   <div className="title">taleyoung</div>
    //   <div className="subTitle">js爱好者</div>
    //   <Divider>热门文章</Divider>
    //   <div className="articleList">
    //     <div>从Material Design到UI设计</div>
    //     <div>从Material Design到UI设计</div>
    //     <div>从Material Design到UI设计</div>
    //     <div>从Material Design到UI设计</div>
    //   </div>
    //   <Divider>标签</Divider>
    //   <div className="tagList">
    //     {tags.map(item => (
    //       <Tag key={item.id} color="blue">
    //         {item.name}
    //       </Tag>
    //     ))}
    //   </div>
    //   <style jsx>{`
    //     .container {
    //       border: 1px solid #eee;
    //       padding: 30px;
    //       text-align: center;
    //       box-shadow: 5px 5px 4px -4px #eee;
    //       background: #fff;
    //       height: 1000px;
    //     }
    //     .avatar {
    //       width: 150px;
    //       height: 150px;
    //     }
    //     .title {
    //       font-size: 1.5em;
    //       font-weight: 700;
    //       margin-top: 10px;
    //     }
    //     .subTitle {
    //       font-size: 13px;
    //       margin-top: 5px;
    //       margin-bottom: 5px;
    //     }
    //     .articleList {
    //       font-size: 13px;
    //     }
    //     .tagList {
    //       margin-top: 5px;
    //     }
    //   `}</style>
    // </div>
  );
};

SideBar.getInitialProps = async function() {
  console.log("object");
  const res = await myApi("tag");
  console.log("res", res);
  return {
    tags: res
  };
};

export default SideBar;
