import React from "react";
import { Text } from "./Typograph.styled";

const Typography: React.FC<ITypographProps> = ({
  children,
  fontSize = 14,
  textTransform = "none",
  fontWeight = 400,
  color = "#2F2E41",
  lineHeigth = "normal",
  italic = false,
  ...props
}) => {
  return (
    <Text
      fontSize={fontSize}
      textTransform={textTransform}
      fontWeight={fontWeight}
      color={color}
      cursorPointer={props.onClick ? true : false}
      lineHeigth={lineHeigth}
      italic={italic}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Typography;
