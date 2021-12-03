export const colors = {
  red: '#d93c31',
  black: '#2e2d2c',
  blue: '#1459db',
  gray: '#ededed',
  white: 'white',

  unique: 'red',
  primary: 'black',

  backdropMaskColor: '#0009',
  transparent: 'transparent',

  primaryDark: '#2f2f2f',
  secondaryDark: '#212121',
};

export const transitions = {
  defaultDuration: ' .2s',
  timingFunction: ' cubic-bezier(0.39, 0.575, 0.565, 1)',
  buttonProperties: 'color, border, background-color, box-shadow',
};

export const fontSizes = {
  xs: '0.8rem',
  s: '0.9rem',
  m: '1rem',
  l: '1.2rem',
  xl: '1.4rem',
  xxl: '2rem',
  xxxl: '2.4rem',
};

export const fontWeights = {
  normal: '400',
  bold: '700',
};

export const borders = {
  lightBorder: '1px solid #dbdbdb',
  focusOutlineLightMode: `0 0 0 0.15rem ${colors.blue}`,
  focusOutlineDarkMode: `0 0 0 0.15rem ${colors.white}`,

  defaultWidth: '2px',

  roundedFull: '1000px',
};

export let spacers = {
  defaultButtonPadding: '11px 15px 11px 30px',
};

// Add new key + value paires to spacer object in following format: 'spacer-1': '4px','spacer-2': '8px', ...
for (let i = 0; i < 17; i++) {
  spacers = { ...spacers, [`spacer-${i}`]: `${i * 4}px` };
}
