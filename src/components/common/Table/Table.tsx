import React from "react";
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
            <th
              key={index}
              align="left"
              style={{ width: header.width, paddingBottom: 21 }}
            >
              <Typography
                color="#999"
                fontWeight={700}
                textTransform="uppercase"
              >
                {header.header}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              {collumns.map((row, index) => (
                <td key={index} style={{ paddingBottom: 21, width: row.width }}>
                  {row.renderCell(item)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
