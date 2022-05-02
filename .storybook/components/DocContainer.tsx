import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { darkTheme, lightTheme } from '../../src/styles/themes';

export const DocsContainer = ({ children, context, isDarkTheme }) => {
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <BaseContainer
        context={{
          ...context,
          parameters: {
            ...context.parameters,
            docs: {
              ...context.parameters.docs,
              theme: isDarkTheme ? themes.dark : themes.light,
            },
          },
        }}
      >
        {children}
      </BaseContainer>
    </ThemeProvider>
  );
};
