import { UnpluralKey } from './plural';
declare type Keys<T> = keyof T & string;
declare type ConcatedKey<GKey extends string, GPrefix> = GPrefix extends string ? `${GPrefix}.${GKey}` : GKey;
declare type FinalKey<GKey extends string, GPrefix> = ConcatedKey<UnpluralKey<GKey>, GPrefix>;
declare type DeeplyConcatedObj<T, GPrefix> = {
    [key in Keys<T> as T[key] extends Record<string, unknown> ? Keys<DeeplyConcatedObj<T[key], ConcatedKey<key, GPrefix>>> : FinalKey<key, GPrefix>]: string;
};
export type { DeeplyConcatedObj };
