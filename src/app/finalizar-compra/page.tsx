"use client";

import Stack from "@/components/common/Stack";
import Typography from "@/components/common/Typography";
import { useEffect } from "react";
import ConfirmPurchase from "../../../public/icons/ConfirmPurchase";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import useMovies from "@/hooks/useMovies";

export default function FinalizePurchase() {
  const { push } = useRouter();
  const { clearCart } = useMovies();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <Stack
      px={1}
      py={4}
      gap={2}
      borderRadius={0.25}
      backgroundColor="#fff"
      alignItems="center"
    >
      <Typography textAlign="center" fontSize={20} fontWeight={700}>
        Compra realizada <br /> com sucesso!
      </Typography>

      <ConfirmPurchase />

      <Button width="100%" onClick={() => push("/")}>
        <Typography color="#fff" fontWeight={700}>
          Voltar
        </Typography>
      </Button>
    </Stack>
  );
}
