import React from "react";
import Stack from "../Stack";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Stack minHeight="100vh" backgroundColor="#2F2E41">{children}</Stack>;
};

export default BaseLayout;
