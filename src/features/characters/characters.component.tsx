import { FC } from 'react';
import { useGetCharactersQuery } from './characters.endpoints';
import CharacterCard from './CharacterCard/components/CharacterCard';

export type CharactersComponentProps = {
  rickIDDS: number[];
};

const CharactersComponent: FC<CharactersComponentProps> = ({
  rickIDDS

}: CharactersComponentProps) => {
  const { data: characters, error, isLoading } = useGetCharactersQuery({ ids: rickIDDS });

  if (isLoading) return <div>Loading characters...</div>;
  if (error || !characters) return <div>Error when loading. Please try again later.</div>;
  const charactersArray = Array.isArray(characters) ? characters : [characters];

  return (
    <div className={'characters'}>
      {charactersArray.map((character) => (
        <CharacterCard character={character}>
          <CharacterCard.Image />
          <CharacterCard.Body>
            <CharacterCard.Content />
            <CharacterCard.Actions />
          </CharacterCard.Body>
        </CharacterCard>
      ))}
    </div>
  );
};

export default CharactersComponent;
