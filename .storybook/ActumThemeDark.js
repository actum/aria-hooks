import { themes } from '@storybook/theming';
import { create } from '@storybook/theming';
import LogoActumWhite from './.public/logo-actum-white.svg';

export default create({
  ...themes.dark,

  colorPrimary: 'red',
  colorSecondary: '#d93c31',

  // UI
  appBorderRadius: 0,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: '#d93c31',
  barBg: '#212121',

  // Form colors
  inputBorderRadius: 0,

  brandImage: LogoActumWhite,
});
