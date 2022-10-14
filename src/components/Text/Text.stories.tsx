import { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from '.';

export default {
   title: 'Components/Text',
   component: Text,
   args: {
      children: "Lorem ipsum.",
      size: 'md',
   },
   argTypes: {
      size: { 
         options: ['sm', 'md', 'lg'],
         control: {
            type: 'inline-radio'
         }
      }
   }
} as Meta<TextProps>;

// Variação Default
export const Default: StoryObj = {};

export const Small: StoryObj<TextProps> = {
   args: {
      size: 'sm',
      children: "Lorem ipsum.",
   }
};

export const Large: StoryObj<TextProps> = {
   args: {
      size: 'lg',
      children: "Lorem ipsum.",
   }
};

export const CustomComponent: StoryObj<TextProps> = { 
   args: {
      asChild: true,
      children: (
         <p>Text with p tag</p>
      )
   },
   argTypes: {
      children: {
         control: {
            type: null
         }
      },
      asChild: {
         control: {
            type: null
         }
      }
   }
};