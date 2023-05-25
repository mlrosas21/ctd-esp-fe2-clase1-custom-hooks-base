import { Character } from "features/characters";
import { addCharacterToFollowingList, removeCharacterToFollowingList } from "features/following/following.slices";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks"

interface Props {
  character: Character
}

export const useFavorite = ({character} : Props) => {
  const dispatch = useAppDispatch();
  const followingIds = useAppSelector((state) => state.following.followingIds);
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    setIsFav(followingIds.indexOf(character.id) >= 0)
  }, [followingIds, character])

  const toggleFavorite = () => {       
    !isFav
    ? dispatch(addCharacterToFollowingList(character.id)) 
    : dispatch(removeCharacterToFollowingList(character.id))
  }

  return {toggleFavorite, isFav}
}