import ActumTheme from './ActumTheme';
import { DocsContainer } from './components/DocContainer';
import LogoActumRed from './.public/logo-actum-red.svg';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  docs: {
    container: DocsContainer,
  },
  darkMode: {
    stylePreview: true,
    dark: {
      ...ActumTheme,
      appBg: '#424242',
      appContentBg: '#121212',
      textColor: '#ccc',
      barTextColor: '#fff',
      barSelectedColor: 'red',
      barBg: '#212121',
      inputBg: '#757575',
      inputBorder: '#111',
      inputTextColor: '#ccc',
      brandImage: LogoActumRed,
    },
    light: ActumTheme,
  },
};

export const decorators = [(Story) => <Story />];
