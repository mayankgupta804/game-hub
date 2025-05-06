import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Game, Genre } from "./useGames";

const useGenres = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);


  const getGenres = (data: Game[]): string[] => {
    const allGenres = data.reduce((acc, game) => {
      game.genres.forEach(genre => {
        if (!acc.includes(genre)) acc.push(genre);
      });
      return acc;
    }, [] as Genre[]);

    const genres: string[] = allGenres.map(genre => {
      return genre.name;
    });

    console.log(genres);

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
