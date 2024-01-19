import styled from "styled-components";
import Stack from "@/components/common/Stack";

export const Container = styled(Stack)`
  min-height: calc(100vh - 92px);

  .table-default-component {
    display: none;
  }

  @media (min-width: 576px) {
    height: auto;

    .table-default-component {
      display: inline-table;
    }

    .items-mobile {
      display: none;
    }

    .box-confirm-order {
      flex-direction: row-reverse;
      justify-content: space-between;

      .button-default-component {
        width: 14.688rem;
      }
    }
  }

  @media (min-width: 1200px) {
    margin: 0 6.25rem;
  }
`;
