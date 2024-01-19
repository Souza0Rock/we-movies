import styled from "styled-components";
import Link from "next/link";
import Stack from "../Stack";

export const TextLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

export const Container = styled(Stack)`
  .text-my-cart {
    display: none;
  }

  @media (min-width: 992px) {
    .text-my-cart {
      display: initial;
    }

    margin-bottom: 1.5rem;
    padding: 1.125rem 15rem;
  }
`;
