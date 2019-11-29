import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function FreeSolo({ data }) {
  console.log("searchbar data", data);
  const handleSearchInputClick = (e: any) => {
    console.log("input click", e.target);
  };
  return (
    <div>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={data.map(option => option.name)}
        renderInput={params => (
          <TextField
            {...params}
            label="Search Name"
            margin="normal"
            variant="outlined"
            fullWidth
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
}
