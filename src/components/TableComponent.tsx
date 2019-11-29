import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

export default function SimpleTable({ data }) {
  const classes = useStyles();

  const [blockedUserstate, setblockedUserstate] = React.useState();
  const [topUsersState, settopUsersState] = React.useState();

  console.log("state top user", topUsersState, blockedUserstate);
  const handleTopUserClick = (e: any) => {
    settopUsersState({
      ...topUsersState,
      [e.target.value]: e.target.checked
    });
  };

  const handleBlockUserClick = (e: any) => {
    setblockedUserstate({
      ...blockedUserstate,
      [e.target.value]: e.target.checked
    });
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Blocked</TableCell>
            <TableCell align="right">Top User</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => {
            const { name, email, id } = row;
            return (
              <TableRow key={name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{email}</TableCell>
                <TableCell align="right">
                  <Switch
                    checked={blockedUserstate ? blockedUserstate.id : null}
                    onChange={handleBlockUserClick}
                    value={id}
                    color="primary"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Checkbox
                    checked={topUsersState ? topUsersState.id : null}
                    onChange={handleTopUserClick}
                    value={id}
                    color="primary"
                    inputProps={{
                      "aria-label": "secondary checkbox"
                    }}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
