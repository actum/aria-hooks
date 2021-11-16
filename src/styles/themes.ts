import { colors } from './variables';

export const btnThemes = {
  'primary': {
    color: colors.white,
    background: colors.black,
    borderColor: colors.transparent,

    hoverBackground: colors.red,
  },
  'secondary': {
    color: colors.primary,
    background: colors.transparent,
    borderColor: colors.primary,
    svgColor: colors.red,

    hoverBorderColor: colors.unique,
    focusBorderColor: colors.primary,
  },
  'unique': {
    color: colors.white,
    background: colors.red,
    borderColor: colors.transparent,
  },
};
