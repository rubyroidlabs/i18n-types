import { useTranslation as useI18nextTranslation } from 'react-i18next'
import { KeyOptions, TranslationKey } from './types'

const useTranslation = () => {
  const i18next = useI18nextTranslation('translation')

  const t = <GKey extends TranslationKey>(
    key: GKey,
    options?: KeyOptions<GKey>,
  ): string => {
    return i18next.t(key, options)
  }

  return { t }
}

export { useTranslation }
