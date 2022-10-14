import { ReactNode } from 'react';

import { getClassName } from '../../utils/getClassName';

export interface TextInputRootProps {
   children: ReactNode;
}

export function Root({ children }: TextInputRootProps) {
   const styles = {
      input: 'py-4 px-3 rounded w-full flex items-center gap-3',
      bg: 'bg-gray-800',
      animation: 'focus-within:ring-2 ring-cyan-300'
   }

   const className = getClassName(styles);

   return(
      <div className={className}>
         { children }
      </div>
   );
}

Root.displayName = 'TextInput.Root';
