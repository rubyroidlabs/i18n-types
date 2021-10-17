declare type PluralSuffix = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other';
declare type UnpluralKey<GKey extends string> = GKey extends `${infer GPlainKey}_${PluralSuffix}` ? GPlainKey : GKey;
declare type PluralOptions = {
    count: number;
};
export type { UnpluralKey, PluralOptions };
