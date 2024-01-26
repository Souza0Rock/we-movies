import { useCallback, useEffect, useState } from "react";
import { useGlobalData } from "@/contexts/globalData";
import { getMovies } from "@/services/fetch/getMovies";
import { putMovie } from "@/services/fetch/putMovie";

const useMovies = ({ dataInitial = [] }: { dataInitial?: TMovie[] } = {}) => {
  const { setItemsInCart } = useGlobalData();

  const [loading, setLoading] = useState(false);

  const [movies, setMovies] = useState<TMovie[]>(dataInitial ?? []);
  const [moviesInCart, setMoviesInCart] = useState<TMovie[]>([]);

  const fetchMovies = useCallback(async () => {
    movies.length === 0 && setLoading(true);

    try {
      if (movies.length === 0) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      const data = await getMovies();
      setMovies(data);

      const itemsInCart = data.filter((i) => i.in_shopping_cart);
      setMoviesInCart(itemsInCart);

      return data;
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [movies]);

  const fetchPutMovie = useCallback(
    async (payload: TMovie) => {
      try {
        await putMovie(payload);

        fetchMovies();
      } catch (error) {
        console.log(error);
      }
    },
    [fetchMovies]
  );

  const priceTotalCart = moviesInCart.reduce(
    (total, object) => total + object.price * object.quantity_in_shopping_cart,
    0
  );

  const removeItem = async (data: TMovie) => {
    const { quantity_in_shopping_cart, ...prev } = data;

    const payload = {
      ...prev,
      quantity_in_shopping_cart: 0,
      in_shopping_cart: false,
    };

    try {
      fetchPutMovie(payload);
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
      fetchPutMovie(payload);
    } catch (error) {
      console.log(error);
    }
  };

  const clearCart = async () => {
    await fetchMovies().then((res) => {
      const itemsInCart = res.filter((i) => i.in_shopping_cart);

      const loopMovies = itemsInCart.map((movie) => {
        const { in_shopping_cart, quantity_in_shopping_cart, ...prev } = movie;

        putMovie({
          in_shopping_cart: false,
          quantity_in_shopping_cart: 0,
          ...prev,
        });

        setItemsInCart(0);
      });

      return loopMovies;
    });
  };

  useEffect(() => {
    if (dataInitial) {
      const itemsInCartInitial = dataInitial.filter((i) => i.in_shopping_cart);
      setMoviesInCart(itemsInCartInitial);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setItemsInCart(moviesInCart.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesInCart]);

  return {
    clearCart,
    removeItem,
    addItemInCart,
    loading,
    data: {
      movies,
      moviesInCart,
      priceTotalCart,
    },
  };
};

export default useMovies;
