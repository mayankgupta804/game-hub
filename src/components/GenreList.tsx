import { List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <List>
      {data?.results.map((genre) => {
        return (
          <ListItem paddingY='5px' key={genre.id}>
            <Text fontSize='lg'>{genre.name}</Text>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
