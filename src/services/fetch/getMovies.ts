import { localInstance } from "../connectApi";

export const getMovies = async (): Promise<TMovie[]> => {
  try {
    const { data } = await localInstance.get(`/products`);
    return data;
  } catch (error) {
    throw error;
  }
};
