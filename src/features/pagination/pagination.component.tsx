import { FC } from 'react';
import PaginationInfo from './pagination.types';
import { useLanguage } from '../../hooks/useLanguage';

type PaginationProps = {
  p: PaginationInfo;
  onP: () => void;
  onN: () => void;
};

const Pagination: FC<PaginationProps> = ({ p, onP, onN }: PaginationProps) => {
  const { translate } = useLanguage();
  const onPrev = () => {
    onP();
  };

  const onNext = () => {
    onN();
  };

  return (
    <div className={'pagination'}>
      <button disabled={!p.prev} onClick={() => onPrev()} className={'button primary'}>
        {translate('pagination.back')}
      </button>
      <button disabled={!p.next} onClick={() => onNext()} className={'button primary'}>
        {translate('pagination.next')}
      </button>
    </div>
  );
};

export default Pagination;
