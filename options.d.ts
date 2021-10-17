import { TranslationKeyForLocale } from './locale';
import { TranslationValueByKey } from './nested';
import { PluralOptions } from './plural';
declare type VoidOptionKey = undefined;
declare type OptionKeys<GTranslation extends string> = GTranslation extends `${string}{{${infer TOption}}}${infer TRestTranslation}` ? Exclude<TOption | OptionKeys<TRestTranslation>, VoidOptionKey> : VoidOptionKey;
declare type OptionValue = string | number;
declare type OptionsObj<GKey> = [GKey] extends [string] ? Record<GKey, OptionValue> : {};
declare type Options<GTranslation extends string> = OptionsObj<OptionKeys<GTranslation>>;
declare type RawKeyOptions<GKey, Locale> = Options<TranslationValueByKey<GKey, Locale>>;
declare type KeyOptionsForLocale<Locale, GKey extends TranslationKeyForLocale<Locale>> = TranslationValueByKey<GKey, Locale> extends string ? RawKeyOptions<GKey, Locale> : // @ts-ignore
RawKeyOptions<`${GKey}_other`, Locale> & PluralOptions;
export type { KeyOptionsForLocale };
