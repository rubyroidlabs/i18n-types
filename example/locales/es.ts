import { GeneralLocale } from '../types/locale'

const es: GeneralLocale = {
  translation: {
    appName: 'Mi aplicación',
    home: {
      title: 'Inicio',
      description: 'Bienvenido a la página de inicio',
      greeting: '¡Hola, {{ username }}!',
    },
    menu: {
      itemsCount_one: 'Hay {{ count }} elemento',
      itemsCount_other: 'Hay {{ count }} elementos',
    },
    settings: {
      title: 'Ajustes',
      language: 'Idioma',
    },
  },
}

export default es
