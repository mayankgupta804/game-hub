import useData from "./useData";

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
  genres: Genre[];
}

export interface Genre {
  name: string;
}

const useGames = () => useData<Game>("/games/random/10");

export default useGames;
