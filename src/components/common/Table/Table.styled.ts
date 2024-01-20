import styled from "styled-components";

export const HeadCell = styled.td<{ width?: string }>`
  width: ${({ width = "auto" }) => width};
  padding-bottom: 1.375rem;
`;

export const Cell = styled.td<{ width?: string }>`
  width: ${({ width = "auto" }) => width};
  padding-bottom: 1.375rem;
`;
