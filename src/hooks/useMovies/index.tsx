import { useCallback, useEffect, useState } from "react";
import { useGlobalData } from "@/contexts/globalData";
import { getMovies } from "@/services/fetch/getMovies";
import { putMovie } from "@/services/fetch/putMovie";

const useMovies = () => {
  const { setItemsInCart } = useGlobalData();

  const [movies, setMovies] = useState<TMovie[]>([]);
  const [moviesInCart, setMoviesInCart] = useState<TMovie[]>([]);
  const [trigger, setTrigger] = useState(false);

  const dispatchTrigger = () => setTrigger(!trigger);

  const fetchMovies = useCallback(async () => {
    const data = await getMovies();
    setMovies(data);

    const itemsInCart = data.filter((i) => i.in_shopping_cart);
    setMoviesInCart(itemsInCart);

    setItemsInCart(itemsInCart.length);
  }, [setItemsInCart]);

  const priceTotalCart = moviesInCart.reduce(
    (total, objeto) => total + objeto.price * objeto.quantity_in_shopping_cart,
    0
  );

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies, trigger]);

  const clearCart = () => {
    const loopMovies = moviesInCart.map((movie) => {
      const { in_shopping_cart, quantity_in_shopping_cart, ...prev } = movie;

      putMovie({
        in_shopping_cart: false,
        quantity_in_shopping_cart: 0,
        ...prev,
      });
    });

    setItemsInCart(0);

    return loopMovies;
  };

  const removeItem = async (data: TMovie) => {
    const { quantity_in_shopping_cart, ...prev } = data;

    const payload = {
      ...prev,
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

  const addItemInCart = async (data: TMovie, value: number) => {
    const { quantity_in_shopping_cart, in_shopping_cart, ...prev } = data;

    const payload = {
      ...prev,
      quantity_in_shopping_cart: value,
      in_shopping_cart: true,
    };

    try {
      putMovie(payload);
      dispatchTrigger();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    clearCart,
    removeItem,
    fetchMovies,
    addItemInCart,
    dispatchTrigger,
    data: {
      movies,
      moviesInCart,
      priceTotalCart,
    },
  };
};

export default useMovies;
