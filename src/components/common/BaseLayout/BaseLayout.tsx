"use client";

import React from "react";
import Stack from "../Stack";
import Header from "../Header";
import { GlobalDataProvider } from "@/contexts/globalData";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <GlobalDataProvider>
      <Stack minHeight="100vh" backgroundColor="#2F2E41">
        <Header />
        <Stack mx={1} mb={1.5}>
          {children}
        </Stack>
      </Stack>
    </GlobalDataProvider>
  );
};

export default BaseLayout;
