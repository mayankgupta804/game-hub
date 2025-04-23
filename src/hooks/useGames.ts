import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: string;
  game_id: string;
  name: string;
}

export interface Game {
  id: string;
  background_image: string;
  name: string;
  platforms: Platform[];
  metacritic: number;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<Game[]>("/games/random/10", { signal: controller.signal })
      .then(res => setGames(res.data))
      .catch((err: Error) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
