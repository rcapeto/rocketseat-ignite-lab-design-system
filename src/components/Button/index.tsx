import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

import { getClassName } from '../../utils/getClassName';

export interface ButtonProps {
   children: ReactNode;
   asChild?: boolean;
};

export function Button({ children, asChild }: ButtonProps) {
   const Component = asChild ? Slot : 'button';

   const styles = {
      fonts: 'font-semibold text-black text-sm',
      bg: 'bg-cyan-500',
      btn: 'rounded w-full py-4 px-3 w-full transition-colors ring-white',
      animation: 'hover:bg-cyan-300 focus:ring-2'
   }

   const className = getClassName(styles);

   return(
      <Component className={clsx(className)}>
         { children }
      </Component>
   );
}