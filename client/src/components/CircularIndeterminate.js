import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Stack } from "@mui/material";

export default function CircularIndeterminate() {
  return (
    <Stack sx={{ alignItems: "center", marginTop: "30px" }}>
      <CircularProgress />
    </Stack>
  );
}
