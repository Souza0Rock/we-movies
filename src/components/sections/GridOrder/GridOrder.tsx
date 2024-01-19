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
import Image from "next/image";
import Counter from "@/components/common/Counter";
import Trash from "../../../../public/icons/Trash";
import { Container } from "./GridOrder.styled";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const GridOrder: React.FC = () => {
  const { push } = useRouter();
  const { data, loading, removeItem, addItemInCart } = useMovies();

  const Table = () => {
    return (
      <table className="table-default-component">
        <thead style={{ marginBottom: 21 }}>
          <tr>
            <th align="left" style={{ paddingBottom: 21 }}>
              <Typography
                color="#999"
                fontWeight={700}
                textTransform="uppercase"
              >
                produto
              </Typography>
            </th>
            <th align="left" style={{ paddingBottom: 21 }}>
              <Typography
                color="#999"
                fontWeight={700}
                textTransform="uppercase"
              >
                qtd
              </Typography>
            </th>
            <th align="left" style={{ paddingBottom: 21 }}>
              <Typography
                color="#999"
                fontWeight={700}
                textTransform="uppercase"
              >
                subtotal
              </Typography>
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {data.moviesInCart.map((i) => (
            <tr key={i.id}>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 52,
                  width: "fit-content",
                  paddingBottom: 21,
                }}
              >
                <Image src={i.image} alt={i.title} width={89} height={114} />
                <Stack>
                  <Typography fontWeight={700}>{i.title}</Typography>
                  <Typography fontSize={16} fontWeight={700}>
                    R$ {formatPrice(i.price)}
                  </Typography>
                </Stack>
              </td>
              <td style={{ paddingBottom: 21 }}>
                <Counter
                  value={i.quantity_in_shopping_cart}
                  handleChange={(e) => addItemInCart(i, e)}
                />
              </td>
              <td style={{ paddingBottom: 21 }}>
                <Typography fontSize={16} fontWeight={700}>
                  R$ {formatPrice(i.price * i.quantity_in_shopping_cart)}
                </Typography>
              </td>
              <td style={{ paddingBottom: 21 }}>
                <Stack cursorPointer onClick={() => removeItem(i)}>
                  <Trash />
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return !loading ? (
    data.moviesInCart.length > 0 ? (
      <Container
        p={1}
        gap={1.375}
        borderRadius={0.25}
        backgroundColor="#fff"
        justifyContent="space-between"
      >
        <Table />

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
    )
  ) : (
    <LoadingSpinner />
  );
};

export default GridOrder;
