import Icon from './extensions/icon.png'
import Logo from './extensions/logo.svg'

export default {
  config: {
    locales: [],
    auth: {
      logo: Logo,
    },
    head: {
      favicon: Icon,
    },
    menu: {
      logo: Icon,
    },
    translations: {
      en: {
        'Auth.form.welcome.title': 'Welcome to Won Games!',
        'Auth.form.welcome.subtitle': 'Log in to your account',
        'app.components.LeftMenu.navbrand.title': 'Won Games Dashboard',
      }
    }
  },
  bootstrap() {
  },
};
