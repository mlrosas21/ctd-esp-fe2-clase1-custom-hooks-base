import Character from "features/characters/characters.types";
import { createContext, useContext } from "react";

const CharacterCardContext = createContext<{character: Character} | null>(null)

export function useCharacterCardContext() {
  const context = useContext(CharacterCardContext)

  if(!context){
    throw new Error ('missing')
  }

  return context
}

export default CharacterCardContext