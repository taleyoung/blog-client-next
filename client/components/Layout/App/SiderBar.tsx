import React, { SFC, useState, useEffect } from "react";
import Link from "next/link";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Hidden from "@material-ui/core/Hidden";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Collapse from "@material-ui/core/Collapse";

const SideBar: SFC = () => {
  const [open, setOpen] = useState(false);
  const drawerWidth = 300;

  const useStyles: any = makeStyles((theme: Theme) =>
    createStyles({
      drawer: {
        [theme.breakpoints.up("md")]: {
          width: drawerWidth,
          flexShrink: 0
        }
      },
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: drawerWidth
      },
      nested: {
        paddingLeft: theme.spacing(4)
      }
    })
  );
  const classes = useStyles();
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button onClick={() => setOpen(open => !open)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="前端" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="helloWorld小程序全面复盘helloWorld小程序全面复盘" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="webpack深度解析" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="ts+nextjs+koa同构博客" />
            </ListItem>
          </List>
        </Collapse>
        <Link href={{ pathname: "/overview" }}>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="全部文章" />
          </ListItem>
        </Link>
        {["前端", "后端", "零碎"].map((text, index) => (
          <Link
            key={text}
            href={{
              pathname: "/overview",
              query: { cate: encodeURIComponent(text) }
            }}
          >
            <ListItem button>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
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

export default SideBar;
