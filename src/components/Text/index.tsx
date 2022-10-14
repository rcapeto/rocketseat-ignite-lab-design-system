import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

import { getClassName } from '../../utils/getClassName';

export interface TextProps {
   size?: 'sm' | 'md' | 'lg',
   children: ReactNode;
   asChild?: boolean;
};

export function Text({ size = 'md', children, asChild }: TextProps) {
   const Component = asChild ? Slot : 'span';

   const className = getClassName({ font: 'text-gray-100 font-sans' });

   return(
      <Component
         className={
            clsx(
               className,
               {
                  'text-xs': size === 'sm',
                  'text-sm': size === 'md',
                  'text-md': size === 'lg',
               }
            )}
      >
         { children }
      </Component>
   );
}