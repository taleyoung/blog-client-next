import React, { SFC, ReactNode } from "react";
import Header from "./Header";
import SiderBar from "./SiderBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

export interface Props {
  children: ReactNode;
}
const AppLayout: SFC<Props> = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header></Header>
      <SiderBar></SiderBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};

export default AppLayout;
