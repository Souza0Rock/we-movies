import React from "react";
import Stack from "../Stack";
import { putMovie } from "@/services/fetch/putMovie";
import Image from "next/image";
import Typography from "../Typography";
import Trash from "../../../../public/icons/Trash";

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
    <Stack onClick={teste}>
      <Image src={data.image} alt={data.title} width={64} height={82} />

      <Stack>
        <Stack flexDirection="row" justifyContent="space-between" gap={1}>
          <Typography>{data.title}</Typography>
          <Typography>{data.price}</Typography>
          <Trash />
        </Stack>

        <Stack flexDirection="row">
          counter
          <Stack>
            <Typography>subtotal</Typography>
            <Typography>R$ 29,99</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OrderItem;
