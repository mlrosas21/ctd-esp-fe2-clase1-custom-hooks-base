import { FC } from 'react';

type FollowingButtonProps = {
  isFav: boolean;
  onToggleFavorite: (setFav: boolean) => void;
};

const FollowingButtonComponent: FC<FollowingButtonProps> = ({
  isFav,
  onToggleFavorite
}: FollowingButtonProps) => {
  const src = isFav ? '/images/star-filled.png' : '/images/star.png';
  const alt = isFav ? 'is_favorite' : 'is_not_favorite';

  return (
    <button className={'following-button'} onClick={() => onToggleFavorite(!isFav)} aria-label='Mark as favorite'>
      <img src={src} alt='Favorite Icon' />
    </button>
  );
};

export default FollowingButtonComponent;
