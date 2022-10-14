import { Meta, StoryObj } from '@storybook/react';

import { Heading, HeadingProps } from '.';

export default {
   title: 'Components/Heading',
   component: Heading,
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
} as Meta<HeadingProps>;

// Variação Default
export const Default: StoryObj = {};

export const Small: StoryObj<HeadingProps> = {
   args: {
      size: 'sm',
      children: "Lorem ipsum.",
   },
   argTypes: {
      asChild: {
         control: {
            type: null
         }
      }
   }
};

export const Large: StoryObj<HeadingProps> = {
   args: {
      size: 'lg',
      children: "Lorem ipsum.",
   }
};

export const CustomComponent: StoryObj<HeadingProps> = { 
   args: {
      asChild: true,
      children: (
         <h1>Title with h1 tag</h1>
      )
   },
   argTypes: {
      children: {
         table: {
            disabled: true
         }
      },
      asChild: {
         table: {
            disabled: true,
         }
      }
   }
};