import { DeeplyConcatedObj } from './concat';
declare type GeneralLocaleFromConcrete<GObj> = {
    [key in keyof GObj]: GObj[key] extends string ? string : GeneralLocaleFromConcrete<GObj[key]>;
};
declare type TranslationKeyForLocale<T> = keyof DeeplyConcatedObj<T, unknown>;
export type { GeneralLocaleFromConcrete, TranslationKeyForLocale, };
