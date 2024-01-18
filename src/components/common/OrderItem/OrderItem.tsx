import React from "react";
import Stack from "../Stack";
import { putMovie } from "@/services/fetch/putMovie";
import Image from "next/image";
import Typography from "../Typography";
import Trash from "../../../../public/icons/Trash";
import Counter from "../Counter";

// import { Container } from './styles';

const OrderItem: React.FC<{ data: TMovie; dispatchTrigger: () => void }> = ({
  data,
  dispatchTrigger,
}) => {
  const teste = async () => {
    const { quantity_in_shopping_cart, ...resto } = data;

    const payload = {
      ...resto,
      quantity_in_shopping_cart: 0,
      in_shopping_cart: false,
    };

    try {
      putMovie(payload);
      dispatchTrigger();
    } catch (error) {
      console.log(error);
    }
  };
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
            R$ {data.price}
          </Typography>
          <Trash />
        </Stack>

        <Stack flexDirection="row" alignItems="center" justifyContent="space-between">
          <Counter value={data.quantity_in_shopping_cart} handleChange={(e) => {}} />
          <Stack alignItems="center">
            <Typography color="#999" fontSize={12} fontWeight={700}>
              subtotal
            </Typography>
            <Typography color="#2F2E41" fontWeight={700}>
              R$ 29,99
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OrderItem;
