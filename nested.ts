type ObjectPatternForConcatedKey<GKey extends string> =
  GKey extends `${infer TFirstKey}.${infer TRestKey}`
    ? { [key in TFirstKey]: ObjectPatternForConcatedKey<TRestKey> }
    : { [key in GKey]: unknown }

type TranslationValueByKey<
  GKey extends string,
  GObj extends ObjectPatternForConcatedKey<GKey>,
> = GKey extends `${infer TFirstKey}.${infer TRestKey}`
  ? // @ts-ignore
    TranslationValueByKey<TRestKey, GObj[TFirstKey]>
  : GObj[GKey]

export type { TranslationValueByKey, ObjectPatternForConcatedKey }
