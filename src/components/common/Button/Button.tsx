import React from "react";
import Stack from "../Stack";

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  width = "auto",
  backgrounColor = "#009EDD",
}) => {
  return (
    <Stack
      p={0.5}
      width={width}
      onClick={onClick}
      alignItems="center"
      borderRadius={0.25}
      flexDirection="row"
      justifyContent="center"
      backgroundColor={backgrounColor}
      className="button-default-component"
      cursorPointer
    >
      {children}
    </Stack>
  );
};

export default Button;
