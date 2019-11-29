import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SimpleTable from "./TableComponent";
import SearchComponent from "./SearchComponent";
import Navbar from "./Navbar";

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

export default function App() {
  const classes = useStyles();

  const [topUserData, settopUserData] = useState([]);

  const [data, setData] = useState([]);
  const [showTopUserData, setShowTopUserData] = useState([]);

  const handleTableData = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        setData(res);
      });
  };

  const handleTopUserData = () => {
    console.log("top user data click");
    settopUserData([
      { name: "junaid", email: "junaidchoudhary210@gmail.com", age: 22, id: 1 }
    ]);
  };

  const renderData = () => {
    // if (showTopUserData) return <SimpleTable data={topUserData} />;
    // else if (showUserData) {
    //   return (
    //     <div style={{ marginTop: 15 }}>
    //       <SimpleTable data={data} />
    //     </div>
    //   );
    // }
    if (data.length > 0) {
      return <SimpleTable data={data} />;
    }
  };

  return (
    <div className={classes.root}>
      <Navbar
        handleTableData={handleTableData}
        handleTopUserData={handleTopUserData}
      />
      <SearchComponent data={data} />
      {renderData()}
    </div>
  );
}
