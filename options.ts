import { ObjectPatternForConcatedKey, TranslationValueByKey } from './nested'
import { PluralOptions } from './plural'

type VoidOptionKey = undefined

type OptionKeys<GTranslation extends string> =
  GTranslation extends `${string}{{${infer TOption}}}${infer TRestTranslation}`
    ? Exclude<TOption | OptionKeys<TRestTranslation>, VoidOptionKey>
    : VoidOptionKey

type OptionValue = string | number

type OptionsObj<GKey> = [GKey] extends [string] ? Record<GKey, OptionValue> : {}

type Options<GTranslation extends string> = OptionsObj<OptionKeys<GTranslation>>

type RawKeyOptions<GKey, Locale> = Options<
  // @ts-ignore
  TranslationValueByKey<GKey, Locale>
>

type KeyOptionsForLocale<GKey extends string, Locale extends ObjectPatternForConcatedKey<GKey>> =
  TranslationValueByKey<GKey, Locale> extends string
    ? RawKeyOptions<GKey, Locale>
    : // @ts-ignore
      RawKeyOptions<`${GKey}_other`, Locale> & PluralOptions

export type { KeyOptionsForLocale }
