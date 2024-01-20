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

  .box-my-cart {
    * {
      cursor: pointer;
    }
  }

  @media (min-width: 992px) {
    padding: 1.125rem 15.313rem;

    .text-my-cart {
      display: initial;
    }
  }
`;
