import React from "react";
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";
import Typography from "../Typography";
import Counter from "../Counter";
import Stack from "../Stack";
import Trash from "../../../../public/icons/Trash";

const OrderItem: React.FC<{
  data: TMovie;
  removeItem: (data: TMovie) => void;
  addItemInCart: (data: TMovie, value: number) => void;
}> = ({ data, removeItem, addItemInCart }) => {
  const subtotal = data.price * data.quantity_in_shopping_cart;

  return (
    <Stack gap={1} flexDirection="row">
      <Image src={data.image} alt={data.title} width={64} height={82} />

      <Stack width="100%" gap={1}>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        >
          <Typography color="#2F2E41" fontWeight={700}>
            {data.title}
          </Typography>
          <Typography color="#2F2E41" fontSize={16} fontWeight={700}>
            R$ {formatPrice(data.price)}
          </Typography>

          <Stack onClick={() => removeItem(data)}>
            <Trash />
          </Stack>
        </Stack>

        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Counter
            value={data.quantity_in_shopping_cart}
            handleChange={(e) => addItemInCart(data, e)}
          />
          <Stack alignItems="center">
            <Typography
              color="#999"
              fontSize={12}
              fontWeight={700}
              textTransform="uppercase"
            >
              subtotal
            </Typography>
            <Typography color="#2F2E41" fontWeight={700}>
              R$ {formatPrice(subtotal)}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OrderItem;
