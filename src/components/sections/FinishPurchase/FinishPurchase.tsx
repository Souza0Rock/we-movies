import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useMovies from "@/hooks/useMovies";
import Typography from "@/components/common/Typography";
import Button from "@/components/common/Button";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ConfirmPurchase from "../../../../public/icons/ConfirmPurchase";
import { Container } from "./FinishPurchase.styled";

const FinishPurchase: React.FC = () => {
  const { push } = useRouter();
  const { loading, clearCart } = useMovies();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <Container
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

      <Button width="11.25rem" onClick={() => push("/")}>
        <Typography color="#fff" fontWeight={700}>
          Voltar
        </Typography>
      </Button>
    </Container>
  );
};

export default FinishPurchase;
