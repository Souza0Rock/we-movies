import React from "react";
import { ButtonComponent } from "./Button.styled";

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  width = "auto",
  backgrounColor = "#009EDD",
}) => {
  return (
    <ButtonComponent
      p={0.5}
      width={width}
      onClick={onClick}
      alignItems="center"
      flexDirection="row"
      justifyContent="center"
      backgroundColor={backgrounColor}
      className="button-default-component"
      borderRadius={0.25}
      cursorPointer
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
