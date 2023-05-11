import { FC } from 'react';
import { useLanguage } from 'hooks/useLanguage';

const LanguageComponent: FC = () => {
  const { language, changeLanguage, translate } = useLanguage();

  return (
    <div className={'language'}>
      <button
        onClick={() => changeLanguage('SPANISH')}
        className={language === 'SPANISH' ? 'language-button active' : 'language-button'}>
        {translate('language.spanish')}
      </button>
      <button
        onClick={() => changeLanguage('ENGLISH')}
        className={language === 'ENGLISH' ? 'language-button active' : 'language-button'}>
        {translate('language.english')}
      </button>
      <button
        onClick={() => changeLanguage('PORTUGUESE')}
        className={language === 'PORTUGUESE' ? 'language-button active' : 'language-button'}>
        {translate('language.portuguese')}
      </button>
    </div>
  );
};
export default LanguageComponent;
