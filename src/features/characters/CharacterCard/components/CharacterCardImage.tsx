import React from 'react'
import { useCharacterCardContext } from '../CharacterCardContext';

export const CharacterCardImage = () => {
  const {character} = useCharacterCardContext()

  return (
    <div className={'card-image'}>
      <img src={character.image} alt="Card's image" />
    </div>
  );
};
