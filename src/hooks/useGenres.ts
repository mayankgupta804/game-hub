import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Game, Genre } from "./useGames";

const useGenres = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);


  const getGenres = (games: Game[]): string[] => {
    const genres = games.
      flatMap(game => game.genres).
      map(genre => genre.name)

    return [...new Set(genres)];
  };

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<Game[]>("/games/random/10", { signal: controller.signal })
      .then(res => {
        setGenres(getGenres(res.data));
        setLoading(false);
      })
      .catch((err: Error) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      })


    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
