import React from "react";
import { Box, Spinner } from "./LoadingSpinner.styled";

const LoadingSpinner: React.FC = () => {
  return (
    <Box justifyContent="center" alignItems="center">
      <Spinner />
    </Box>
  );
};

export default LoadingSpinner;
