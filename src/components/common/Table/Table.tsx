import React from "react";
import Typography from "../Typography";
import Image from "next/image";
import Stack from "../Stack";
import { formatPrice } from "@/utils/formatPrice";
import Counter from "../Counter";
import Trash from "../../../../public/icons/Trash";

const Table: React.FC<{
  data: TMovie[];
  addItemInCart: any;
  removeItem: any;
}> = ({ data, addItemInCart, removeItem }) => {
  return (
    <table className="table-default-component">
      <thead style={{ marginBottom: 21 }}>
        <tr>
          <th align="left" style={{ paddingBottom: 21 }}>
            <Typography color="#999" fontWeight={700} textTransform="uppercase">
              produto
            </Typography>
          </th>
          <th align="left" style={{ paddingBottom: 21 }}>
            <Typography color="#999" fontWeight={700} textTransform="uppercase">
              qtd
            </Typography>
          </th>
          <th align="left" style={{ paddingBottom: 21 }}>
            <Typography color="#999" fontWeight={700} textTransform="uppercase">
              subtotal
            </Typography>
          </th>
          <th />
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td
              style={{
                display: "flex",
                alignItems: "center",
                gap: 52,
                width: "fit-content",
                paddingBottom: 21,
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={89}
                height={114}
              />
              <Stack>
                <Typography fontWeight={700}>{item.title}</Typography>
                <Typography fontSize={16} fontWeight={700}>
                  R$ {formatPrice(item.price)}
                </Typography>
              </Stack>
            </td>
            <td style={{ paddingBottom: 21 }}>
              <Counter
                value={item.quantity_in_shopping_cart}
                handleChange={(value) => addItemInCart(item, value)}
              />
            </td>
            <td style={{ paddingBottom: 21 }}>
              <Typography fontSize={16} fontWeight={700}>
                R$ {formatPrice(item.price * item.quantity_in_shopping_cart)}
              </Typography>
            </td>
            <td style={{ paddingBottom: 21 }}>
              <Stack cursorPointer onClick={() => removeItem(item)}>
                <Trash />
              </Stack>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
