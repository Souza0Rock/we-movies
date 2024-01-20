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

  @media (min-width: 992px) {
    min-height: calc(100vh - 175px);
  }

  @media (min-width: 1200px) {
    margin: 0 6.25rem;
  }
`;

export const RemoveButton = styled(Stack)`
  transition: 200ms;
  border-radius: 50%;

  &:hover {
    box-shadow: 0px 0px 4px 8px rgba(0, 0, 0, 0.05);
  }
`;
