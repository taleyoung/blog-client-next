import React, { SFC } from "react";
import Link from "next/link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

interface Props {}
const Header: SFC<Props> = () => {
  const useStyles: any = makeStyles((theme: Theme) =>
    createStyles({
      appBar: {
        zIndex: theme.zIndex.drawer + 1
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
          display: "none"
        }
      },
      title: {
        flexGrow: 1
      },
      menu: {
        [theme.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    })
  );
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          color="textPrimary"
          className={classes.title}
        >
          Taleyoung
        </Typography>
        <Typography className={classes.menu}>
          <Link href="/overview">
            <Button color="inherit">文章归档</Button>
          </Link>
          <Link href="/timeline">
            <Button color="inherit">时间线</Button>
          </Link>
          <Link href="/about">
            <Button color="inherit">关于我</Button>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
// import React, { SFC } from "react";
// import { Menu, Icon, Button } from "antd";
// import Link from "next/link";
// import css from "styled-jsx/css";

// const IconFont = Icon.createFromIconfontCN({
//   scriptUrl: "//at.alicdn.com/t/font_1445382_6tc0o0rwbfu.js"
// });

// const menuList = [
//   {
//     path: "/app/home",
//     iconType: "icon-qiu",
//     name: "首页"
//   },
//   {
//     path: "/app/overview",
//     iconType: "icon-jilu",
//     name: "文章"
//   },
//   {
//     path: "/app/timeline",
//     iconType: "icon-lubiao",
//     name: "时间线"
//   },
//   {
//     path: "/app/about",
//     iconType: "icon-xiangji",
//     name: "关于我"
//   }
// ];

// export interface Props {}

// const Header: SFC<Props> = props => {
//   // const toAdmin = () => {
//   //   props.history.push("/admin/overview");
//   // };
//   return (
//     <div className="topBar">
//       <div className="logo">Taleyoung的博客</div>
//       <div className="menu">
//         <Menu theme="light" mode="horizontal" defaultSelectedKeys={["首页"]}>
//           {menuList.map(menu => (
//             <Menu.Item key={menu.name}>
//               <Link href={menu.path}>
//                 <div>
//                   <IconFont type={menu.iconType} style={{ fontSize: "24px" }} />
//                   {menu.name}
//                 </div>
//               </Link>
//             </Menu.Item>
//           ))}
//         </Menu>
//         {/* <Button>Admin</Button> */}
//       </div>
//       <style jsx>{style}</style>
//     </div>
//   );
// };

// export default Header;

// const style = css`
//   .logo {
//     padding-left: 5%;
//     font-size: 24px;
//   }

//   .menu {
//     line-height: 40px;
//     padding-left: 40%;
//   }

//   .topBar {
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     height: 45px;
//     background-color: #fff;
//     border-bottom: 1px solid #eee;
//     box-shadow: 0 5px 4px #eee;
//   }
// `;
