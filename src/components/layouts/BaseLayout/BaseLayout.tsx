"use client";

import React from "react";
import Stack from "../../common/Stack";
import Header from "../../common/Header";
import { GlobalDataProvider } from "@/contexts/globalData";
import { ContainerChildren } from "./BaseLayout.styled";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <GlobalDataProvider>
      <Stack minHeight="100vh" backgroundColor="#2F2E41">
        <Header />
        <ContainerChildren mx={1} mb={1.5}>
          {children}
        </ContainerChildren>
      </Stack>
    </GlobalDataProvider>
  );
};

export default BaseLayout;
