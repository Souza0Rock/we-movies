"use client";

import React from "react";
import useMovies from "@/hooks/useMovies";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/utils/formatPrice";
import Stack from "@/components/common/Stack";
import Button from "@/components/common/Button";
import OrderItem from "@/components/common/OrderItem";
import Typography from "@/components/common/Typography";
import CartEmpty from "../CartEmpty";
import { Container, RemoveButton } from "./GridOrder.styled";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import Table from "@/components/common/Table/Table";
import Image from "next/image";
import Counter from "@/components/common/Counter";
import Trash from "../../../../public/icons/Trash";

const GridOrder: React.FC = () => {
  const { push } = useRouter();
  const { data, loading, removeItem, addItemInCart } = useMovies();

  const collumns: TCollumn[] = [
    {
      width: "46.55%",
      header: "produto",
      renderCell: (data) => (
        <Stack flexDirection="row" alignItems="center" gap={3.25}>
          <Image src={data.image} alt={data.title} width={89} height={114} />
          <Stack>
            <Typography fontWeight={700}>{data.title}</Typography>
            <Typography fontSize={16} fontWeight={700}>
              R$ {formatPrice(data.price)}
            </Typography>
          </Stack>
        </Stack>
      ),
    },
    {
      header: "qtd",
      renderCell: (data) => (
        <Counter
          value={data.quantity_in_shopping_cart}
          handleChange={(value) => addItemInCart(data, value)}
        />
      ),
    },
    {
      header: "subtotal",
      renderCell: (data) => (
        <Typography fontSize={16} fontWeight={700}>
          R$ {formatPrice(data.price * data.quantity_in_shopping_cart)}
        </Typography>
      ),
    },
    {
      header: "",
      renderCell: (data) => (
        <RemoveButton
          cursorPointer
          width="fit-content"
          onClick={() => removeItem(data)}
        >
          <Trash />
        </RemoveButton>
      ),
    },
  ];

  return loading ? (
    <LoadingSpinner />
  ) : data.moviesInCart.length > 0 ? (
    <Container
      p={1}
      gap={1.375}
      borderRadius={0.25}
      backgroundColor="#fff"
      justifyContent="space-between"
    >
      <Table collumns={collumns} data={data.moviesInCart} />

      <Stack className="items-mobile" gap={1.313}>
        {data.moviesInCart.map((i) => (
          <OrderItem
            key={i.id}
            data={i}
            removeItem={removeItem}
            addItemInCart={addItemInCart}
          />
        ))}
      </Stack>

      <Stack
        className="box-confirm-order"
        borderTop="1px solid #999"
        pt={1.313}
        gap={1}
      >
        <Stack
          px={1}
          gap={2}
          alignItems="center"
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Typography color="#999" fontWeight={700} textTransform="uppercase">
            Total
          </Typography>
          <Typography fontSize={24} fontWeight={700}>
            R$ {formatPrice(data.priceTotalCart)}
          </Typography>
        </Stack>
        <Button onClick={() => push("/finalizar-compra")}>
          <Typography color="#fff" textTransform="uppercase" fontWeight={700}>
            finalizar pedido
          </Typography>
        </Button>
      </Stack>
    </Container>
  ) : (
    <CartEmpty />
  );
};

export default GridOrder;
