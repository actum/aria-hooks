import React from 'react';
import addons from '@storybook/addons';
import ActumTheme from './ActumTheme';
import ActumThemeDark from './ActumThemeDark';
import { DocsContainer } from './components/DocContainer';

import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

const channel = addons.getChannel();

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
    container: props => {
			const [isDark, setDark] = React.useState();

			React.useEffect(() => {
				channel.on(DARK_MODE_EVENT_NAME, setDark);
				return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
			}, [channel, setDark]);

			return (
				<DocsContainer {...props} isDarkTheme={isDark} />
			)
    },
  },
  darkMode: {
    stylePreview: true,
    dark: ActumThemeDark,
    light: ActumTheme,
  },
}

export const decorators = [(Story) => <Story />];
