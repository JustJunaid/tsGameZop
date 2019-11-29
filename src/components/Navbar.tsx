import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import DrawerComponent from "./DrawerComponent";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

export default function Navbar({ handleTableData, handleTopUserData }) {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <DrawerComponent />
        <Typography variant="h4" className={classes.title}></Typography>
        <Button onClick={handleTableData} color="inherit">
          Users
        </Button>
        <Button onClick={handleTopUserData} color="inherit">
          Top Users
        </Button>
      </Toolbar>
    </AppBar>
  );
}
