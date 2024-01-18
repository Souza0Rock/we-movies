"use client"

import React from "react";
import { Container } from "./Stack.styled";

const Stack: React.FC<IStackProps> = (props) => {
  const { className, ref } = props;

  return <Container className={className} ref={ref} {...props} />;
};

export default Stack;
