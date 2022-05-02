import { addons } from '@storybook/addons';
import ActumTheme from './ActumTheme';

addons.setConfig({
  toolbar: {
    title: { hidden: true },
  },
  theme: ActumTheme,
});
