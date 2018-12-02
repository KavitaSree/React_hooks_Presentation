import * as React from "react";
import { memo, ReactNode, Component } from "react";
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";

interface Props {
  type?: string;
  children?: ReactNode;
}

const Layout: React.SFC<Props> = props => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }}
  >
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Toolbar style={{ height: 64 }}>
        <Typography color="inherit">TODO APP</Typography>
      </Toolbar>
    </AppBar>
    {props.children}
  </Paper>
);

const MemoedLayout = memo(Layout);
export default MemoedLayout;
