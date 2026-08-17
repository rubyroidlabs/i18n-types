# i18n-types

> Generic TypeScript types for strongly-typed i18n.

## How to use it?

This solution works well in combination with i18next package.
But can be easily adapted to other i18n engines.

### Install

```bash
yarn add -D https://github.com/rubyroidlabs/i18n-types
```
or
```bash
npm i --save-dev https://github.com/rubyroidlabs/i18n-types
```

### Typing for translation key

You should store your translations in the TS objects. Like this:
```ts
const en = {
  appName: 'My App',
  home: {
    title: 'Home',
    description: 'Lorem ipsum',
    greeting: 'Hi, {{ username }}!',
  },
  menu: {
    itemsCount_one: 'There is {{ count }} item',
    itemsCount_other: 'There are {{ count }} items',
  },
  tabs: {
    settings: {
      name: 'Settings',
    },
  },
} as const
```
Pay attention to the `as const` at the end.

Then, create a locale object type from your default locale (e.g. english):
```ts
type DefaultLocale = typeof en
```

And create the translation key type:
```ts
import { TranslationKeyForLocale } from 'i18n-types'

type TranslationKey = TranslationKeyForLocale<DefaultLocale>
```

So, now you can use this type for typing the key argument for translation function and be sure, that the wrong key won't be passed:
```ts
const t = (key: TranslationKey, options?: any): string => {
  // ...
}
```

### Typing for translation options

Create the generic type for getting options for translation key:
```ts
import { KeyOptionsForLocale } from 'i18n-types'

type KeyOptions<GKey extends TranslationKey> = KeyOptionsForLocale<DefaultLocale, GKey>
```

Make translation function generic and use it like this:
```ts
const t = <GKey extends TranslationKey>(
  key: GKey,
  options: KeyOptions<GKey>,
): string => {
  // ...
}
```

So, now translation options is validated by TS and you won't miss any option/parameter.

### How to require the same fields in all location based on the default?

Create locale type from your default locale object like this:
```ts
import { GeneralLocaleFromConcrete } from 'i18n-types'

type GeneralLocale = GeneralLocaleFromConcrete<TranslationObject>
```

And use it like this:
```ts
const fr: GeneralLocale = {
  ...
}
```

It checks whether locales have the same fields.

## Full example with i18next

```ts
import { KeyOptionsForLocale, TranslationKeyForLocale } from 'i18n-types'
import { useTranslation as useI18nextTranslation } from 'react-i18next'
import en from './locales/en'

type DefaultLocale = typeof en.translation

type TranslationKey = TranslationKeyForLocale<DefaultLocale>

type KeyOptions<GKey extends TranslationKey> = KeyOptionsForLocale<
  DefaultLocale,
  GKey
>

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
```

`./locales/en.ts`
```ts
export default {
  translation: {
    appName: 'My App',
    home: {
      title: 'Home',
      description: 'Welcome to the home page',
      greeting: 'Hi, {{ username }}!',
    },
    menu: {
      itemsCount_one: 'There is {{ count }} item',
      itemsCount_other: 'There are {{ count }} items',
    },
    settings: {
      title: 'Settings',
      language: 'Language',
    },
  },
} as const
```

*Root `translation` key is required by i18next.*

## If nothing works

Try to copy files from `/example` to your project and use them.

## License

MIT. See [LICENSE](./LICENSE).