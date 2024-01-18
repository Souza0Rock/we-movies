import React from "react";
import Stack from "../Stack";
import { putMovie } from "@/services/fetch/putMovie";
import Image from "next/image";
import Typography from "../Typography";
import Trash from "../../../../public/icons/Trash";
import Counter from "../Counter";
import { formatPrice } from "@/utils/formatPrice";

// import { Container } from './styles';

const OrderItem: React.FC<{ data: TMovie; dispatchTrigger: () => void }> = ({
  data,
  dispatchTrigger,
}) => {
  const removeItem = async () => {
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

  const subtotal = data.price * data.quantity_in_shopping_cart;

  const addItem = async (value: number) => {
    const { quantity_in_shopping_cart, ...resto } = data;

    const payload = {
      ...resto,
      quantity_in_shopping_cart: value,
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
            R$ {formatPrice(data.price)}
          </Typography>

          <Stack onClick={removeItem}>
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
            handleChange={(e) => addItem(e)}
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
