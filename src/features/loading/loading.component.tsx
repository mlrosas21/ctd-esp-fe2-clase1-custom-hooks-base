import { useLanguage } from 'hooks/useLanguage';
import { FC } from 'react';
import { useAppSelector } from 'store/hooks';

const LoadingComponent: FC = () => {
  const { translate } = useLanguage()
  return <div>{translate('loading')}</div>;
};

export default LoadingComponent;
