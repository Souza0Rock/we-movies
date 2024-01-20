import React from "react";
import { Cell, HeadCell } from "./Table.styled";
import Typography from "../Typography";

const Table: React.FC<ITableProps> = ({ data, collumns }) => {
  const headers = collumns.map((i) => ({
    header: i.header,
    width: i.width,
  }));

  return (
    <table className="table-default-component">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <HeadCell key={index} align="left" width={header.width}>
              <Typography
                color="#999"
                fontWeight={700}
                textTransform="uppercase"
              >
                {header.header}
              </Typography>
            </HeadCell>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              {collumns.map((row, index) => (
                <Cell key={index} width={row.width}>
                  {row.renderCell(item)}
                </Cell>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
