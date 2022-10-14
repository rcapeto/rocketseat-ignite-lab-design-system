import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

import { getClassName } from '../../utils/getClassName';

export interface HeadingProps {
   size?: 'sm' | 'md' | 'lg',
   children: ReactNode;
   asChild?: boolean;
};

export function Heading({ size = 'md', children, asChild }: HeadingProps) {
   const Component = asChild ? Slot : 'h2';

   const className = getClassName({ font: 'text-gray-100 font-sans font-bold' });

   return(
      <Component
         className={
            clsx(
               className,
               {
                  'text-lg': size === 'sm',
                  'text-xl': size === 'md',
                  'text-2xl': size === 'lg',
               }
            )}
      >
         { children }
      </Component>
   );
}