import styled from "styled-components";
import Stack from "../Stack";

export const ButtonComponent = styled(Stack)`
  transition: 300ms;
  
  * {
    cursor: pointer;
  }

  &:hover {
    filter: brightness(0.9)
  }
`;
