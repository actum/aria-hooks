import ActumTheme from './ActumTheme';
import ActumThemeDark from './ActumThemeDark';
import { DocsContainer } from './components/DocContainer';

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
    dark: ActumThemeDark,
    light: ActumTheme,
  },
};

export const decorators = [(Story) => <Story />];
