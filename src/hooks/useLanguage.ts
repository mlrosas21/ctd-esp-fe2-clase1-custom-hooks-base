import esTranslations from '../data/i18n.es';
import enTranslations from '../data/i18n.en';
import ptTranslations from '../data/i18n.pt';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setLanguage } from '../features/language/language.slices';
import { Language } from '../features/language';

export const useLanguage = () => {

  const language = useAppSelector(state => state.language.language)
  const dispatch = useAppDispatch()

  const changeLanguage = (newLanguage : Language) => {
    dispatch(setLanguage(newLanguage))
  } 

  const translate = (key: string) => {
    if (language === 'SPANISH') {
      return esTranslations[key];
    } else if (language === 'ENGLISH') {
      return enTranslations[key];
    } else if (language === 'PORTUGUESE') {
      return ptTranslations[key];
    }
    return key;
  };

  return { language, changeLanguage, translate }
}