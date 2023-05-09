import { FC } from 'react';
import Languages from "features/language/language.types";
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setLanguage } from './language.slices';

type LanguageComponentProps = {
    t: (key: string) => string;
}

const LanguageComponent: FC<LanguageComponentProps> = ({t}: LanguageComponentProps) => {

  const language = useAppSelector(state => state.language.language)
  const dispatch = useAppDispatch()

  const handleClick = (lang: Languages) => {
    dispatch(setLanguage(lang))
  }

  return (
    <div className={'language'}>
      <div
        onClick={() => dispatch(setLanguage('SPANISH'))}
        className={language === 'SPANISH' ? 'language-button active' : 'language-button'}>
        {t('language.spanish')}
      </div>
      <button
        onClick={() => dispatch(setLanguage('ENGLISH'))}
        className={language === 'ENGLISH' ? 'language-button active' : 'language-button'}>
        {t('language.english')}
      </button>
      <button
        onClick={() => dispatch(setLanguage('PORTUGUESE'))}
        className={language === 'PORTUGUESE' ? 'language-button active' : 'language-button'}>
        {t('language.portuguese')}
      </button>
    </div>
  );
};
export default LanguageComponent;
