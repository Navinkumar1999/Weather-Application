// import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function WeatherAppBar() {
  return (
    <Box sx={{ flexGrow: 2, textAlign: "center" }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            variant="h5"
            color="inherit"
            component="div"
            sx={{ margin: "auto" }}
          >
            Wheather App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
