import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '.';

export default {
   title: 'Components/Button',
   component: Button,
   args: {
      children: "Create account",
   },
} as Meta<ButtonProps>;

// Variação Default
export const Default: StoryObj = {};
