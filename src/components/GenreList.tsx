import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";


interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  return (
    <>
      <Heading marginBottom='3' fontSize='2xl'>Genres</Heading>
      {isLoading ? <Spinner /> :
        <List>
          {data?.results.map((genre) => {
            return (
              <ListItem paddingY='5px' key={genre.id}>
                <HStack>
                  <Image
                    boxSize='32px'
                    borderRadius='8'
                    objectFit='cover'
                    src={getCroppedImageUrl(genre.image_background)} />
                  <Button
                    fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                    onClick={() => onSelectGenre(genre)}
                    fontSize='lg'
                    variant='link'
                    whiteSpace={'normal'}
                    textAlign='left'
                  >
                    <Text >
                      {genre.name}
                    </Text>
                  </Button>
                </HStack>
              </ListItem>
            );
          })}
        </List>}
    </>
  );
};

export default GenreList;
