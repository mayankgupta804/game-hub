import { List, ListItem, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Game } from "../hooks/useGames";

const GenreList = () => {
  const { data, error, isLoading } = useData<Game>("/games/random/10")

  const genres = (games: Game[]) => {
    const genres = games.
      flatMap(game => game.genres).
      map(genre => genre.name)

    return [...new Set(genres)];
  };

  return (
    <List>
      {genres(data).map((genre) => {
        return (
          <ListItem paddingY='5px' key={genre}>
            <Text fontSize='lg'>{genre}</Text>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
