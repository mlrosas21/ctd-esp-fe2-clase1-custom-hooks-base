import { FaSearch } from 'react-icons/fa';
import { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { searchLocations } from '../locations/locations.slices';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from 'hooks/useLanguage';

const SearchBar: FC = () => {
  const locationsQuery = useAppSelector((state) => state.locations.query);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {translate} = useLanguage()

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchLocations(e.target.value));
    navigate('/');
  };

  return (
    <form aria-label="form" onSubmit={(e) => e.preventDefault()} className={'search-form'}>
      <input
        className={'search-input'}
        aria-label="input"
        placeholder={translate('search')}
        value={locationsQuery}
        onChange={onSearch}
      />
      <button className={'icon-button'} type="button">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
