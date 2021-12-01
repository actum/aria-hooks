import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { darkTheme, lightTheme } from '../../src/styles/themes';

export const DocsContainer = ({ children, context }) => {
  const dark = useDarkMode();

  return (
    <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
      <BaseContainer
        context={{
          ...context,
          parameters: {
            ...context.parameters,
            docs: {
              ...context.parameters.docs,
              theme: dark ? themes.dark : themes.light,
            },
          },
        }}
      >
        {children}
      </BaseContainer>
    </ThemeProvider>
  );
};
