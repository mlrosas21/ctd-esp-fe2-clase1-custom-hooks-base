import { useCharacterCardContext } from '../CharacterCardContext';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { addCharacterToFollowingList, removeCharacterToFollowingList } from '../../../following/following.slices';
import { FollowingButtonComponent } from '../../../following/button';

export const CharacterCardActions = () => {
  const {character} = useCharacterCardContext()
  const followingIds = useAppSelector((state) => state.following.followingIds);
  const dispatch = useAppDispatch();

  const onToggleFavorite = (id: number, setFav: boolean) => {
    if (setFav) {
      dispatch(addCharacterToFollowingList(id));
    } else {
      dispatch(removeCharacterToFollowingList(id));
    }
  };

  return (
    <>
      <FollowingButtonComponent
        isFav={followingIds.indexOf(character.id) >= 0}
        onToggleFavorite={(setFav) => onToggleFavorite(character.id, setFav)}
      />
    </>
  );
};