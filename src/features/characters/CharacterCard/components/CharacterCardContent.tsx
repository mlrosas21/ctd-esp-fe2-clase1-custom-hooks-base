import React from 'react'
import { useCharacterCardContext } from '../CharacterCardContext';

export const CharacterCardContent = () => {

  const {character} = useCharacterCardContext()

  return <span>{character.name}</span>;
};
