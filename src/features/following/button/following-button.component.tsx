import { useFavorite } from 'hooks/useFavorite';
import { useCharacterCardContext } from '../../characters/CharacterCard/CharacterCardContext';
import { FC } from 'react';

const FollowingButtonComponent: FC = () => {
  const {character} = useCharacterCardContext()
  const {isFav, toggleFavorite} = useFavorite({character})

  const src = isFav ? '/images/star-filled.png' : '/images/star.png';
  const alt = isFav ? 'is_favorite' : 'is_not_favorite';

  const handleClick = () => {
    toggleFavorite()
  }

  return (
    <button className={'following-button'} onClick={handleClick} aria-label='Mark as favorite'>
      <img src={src} alt={alt} />
    </button>
  );
};

export default FollowingButtonComponent;
