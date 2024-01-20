import styled from "styled-components";
import Stack from "../Stack";

export const CountButton = styled(Stack)`
  cursor: pointer;
  border-radius: 50%;
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const InputNumber = styled.input`
  width: 100%;
  max-width: 3.875rem;
  min-width: 3.75rem;
  padding: 3.8px 0.75rem;
  border: 1px solid #d9d9d9;
  border-radius: 0.25rem;
  outline: none;
  font-size: 14px;
`;
