import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import apiClient from "../services/api-client";


interface Game {
  id: string;
  background_image: string;
  name: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Game[]>("/games/random/20")
      .then(res => setGames(res.data))
      .catch(err => setError(err));
  }, [])
  return (
    <div>
      {error ? <Text>{error}</Text> :
        <ul>
          {games.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
      }
    </div>
  )
}

export default GameGrid;
