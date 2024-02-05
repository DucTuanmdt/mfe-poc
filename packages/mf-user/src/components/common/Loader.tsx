import React, { memo } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";

type LoaderType = "circle" | "linear";

type LoaderProps = {
  type?: LoaderType;
};

const Loader: React.FC<LoaderProps> = ({ type = "linear" }) => {
  const getStyle = () => {
    if (type === "circle") {
      return {
        display: "flex",
      };
    }

    // linear
    return {
      width: "100%",
    };
  };

  return (
    <Box sx={getStyle()}>
      {type === "circle" ? <CircularProgress /> : <LinearProgress />}
    </Box>
  );
};

export default memo(Loader);
