import Character from 'features/characters/characters.types';
import { ReactNode } from 'react';
import CardContext, { useCharacterCardContext } from '../CharacterCardContext';
import { CharacterCardActions } from './CharacterCardActions';
import { CharacterCardContent } from './CharacterCardContent';
import { CharacterCardImage } from './CharacterCardImage';

type Props = {
  children: ReactNode;
  character: Character;
};

const CharacterCard = ({ children, character }: Props) => {
  return (
    <CardContext.Provider value={{ character }}>
      <div className="card">{children}</div>
    </CardContext.Provider>
  );
};

const CharacterCardBody = ({ children }: { children: ReactNode }) => {
  return <div className="card-body">{children}</div>;
};

CharacterCard.Image = CharacterCardImage;
CharacterCard.Content = CharacterCardContent;
CharacterCard.Actions = CharacterCardActions;
CharacterCard.Body = CharacterCardBody;

export default CharacterCard;
