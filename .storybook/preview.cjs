import { themes } from '@storybook/theming';
import { initialize, mswDecorator } from 'msw-storybook-addon';

import '../src/styles/global.css';

initialize({
  //não dar log nas requisições não tratadas.
  onUnhandledRequest: 'bypass'
});

export const decorators = [mswDecorator];

export const parameters = {
  docs: {
    theme: themes.dark,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};