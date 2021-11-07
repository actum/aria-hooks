import { create } from '@storybook/theming';
import LogoActum from './.public/logo-actum.svg'

export default create({
  base: 'light',

  colorPrimary: 'red',
  colorSecondary: '#d93c31',

  // UI
  appBg: '#fff',
  appContentBg: '#fff',
  appBorderColor: '#2e2d2c',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#2e2d2c',
  textInverseColor: 'red',

  // Toolbar default and active colors
  barTextColor: '#2e2d2c',
  barSelectedColor: '#d93c31',
  barBg: '#f5f5f5',

  // Form colors
  inputBg: '#f5f5f5',
  inputBorder: '#2e2d2c',
  inputTextColor: '#2e2d2c',
  inputBorderRadius: 0,

  brandTitle: 'aria-hooks | ACTUM Digital',
  brandUrl: 'https://www.actumdigital.com/',
  brandImage: LogoActum,
});
