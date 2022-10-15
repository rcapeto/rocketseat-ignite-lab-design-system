import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

import { getClassName } from '../../utils/getClassName';
import { omit } from '../../utils/omit';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode;
   asChild?: boolean;
};

export function Button({ children, asChild, ...props }: ButtonProps) {
   const Component = asChild ? Slot : 'button';

   const styles = {
      fonts: 'font-semibold text-black text-sm',
      bg: 'bg-cyan-500',
      btn: 'rounded w-full py-3 px-4 w-full transition-colors ring-white',
      animation: 'hover:bg-cyan-300 focus:ring-2'
   }

   const className = getClassName(styles);

   const correctProps = omit(props, ['className']);

   return(
      <Component className={clsx(className, props.className)} {...correctProps}>
         { children }
      </Component>
   );
}