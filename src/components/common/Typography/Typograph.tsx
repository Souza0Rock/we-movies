import React from "react";
import { Text } from "./Typograph.styled";

const Typography: React.FC<ITypographProps> = ({
  children,
  fontSize = 14,
  textTransform = "none",
  fontWeight = 400,
  color = "#fff",
  lineHeigth = "normal",
  italic = false,
  ...rest
}) => {
  return (
    <Text
      fontSize={fontSize}
      textTransform={textTransform}
      fontWeight={fontWeight}
      color={color}
      cursorPointer={rest.onClick ? true : false}
      lineHeigth={lineHeigth}
      italic={italic}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Typography;
