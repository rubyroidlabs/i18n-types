declare type ObjectPatternForConcatedKey<GKey extends string> = GKey extends `${infer TFirstKey}.${infer TRestKey}` ? {
    [key in TFirstKey]: ObjectPatternForConcatedKey<TRestKey>;
} : {
    [key in GKey]: unknown;
};
declare type TranslationValueByKey<GKey extends string, GObj extends ObjectPatternForConcatedKey<GKey>> = GKey extends `${infer TFirstKey}.${infer TRestKey}` ? TranslationValueByKey<TRestKey, GObj[TFirstKey]> : GObj[GKey];
export type { TranslationValueByKey, ObjectPatternForConcatedKey };
