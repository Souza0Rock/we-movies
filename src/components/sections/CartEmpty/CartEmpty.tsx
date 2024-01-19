import React from "react";
import { useRouter } from "next/navigation";
import Stack from "@/components/common/Stack";
import Button from "@/components/common/Button";
import Typography from "@/components/common/Typography";
import CartEmptyIcon from "../../../../public/icons/CartEmptyIcon";
import { Container } from "./CartEmpty.styled";

const CartEmpty: React.FC = () => {
  const { push } = useRouter();

  return (
    <Container
      py={4}
      gap={2}
      alignItems="center"
      borderRadius={0.25}
      backgroundColor="#fff"
    >
      <Typography fontSize={20} fontWeight={700} textAlign="center">
        Parece que não <br /> há nada por aqui :(
      </Typography>

      <Stack
        width="100%"
        maxWidth="28rem"
        alignItems="center"
        borderBottom="1.3px solid #3F3D56"
      >
        <CartEmptyIcon />
      </Stack>

      <Button width="11.25rem" onClick={() => push("/")}>
        <Typography color="#fff" fontWeight={700}>
          Voltar
        </Typography>
      </Button>
    </Container>
  );
};

export default CartEmpty;
