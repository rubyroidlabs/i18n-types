import { DeeplyConcatedObj } from './concat'

type GeneralLocaleFromConcrete<GObj> = {
  [key in keyof GObj]: GObj[key] extends string
    ? string
    : GeneralLocaleFromConcrete<GObj[key]>
}

type TranslationKeyForLocale<T> = keyof DeeplyConcatedObj<T, unknown>

export type {
  GeneralLocaleFromConcrete,
  TranslationKeyForLocale,
}
