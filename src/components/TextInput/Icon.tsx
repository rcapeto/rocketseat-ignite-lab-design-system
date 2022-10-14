import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputIconProps {
   children: ReactNode;
};

export function Icon({ children }: TextInputIconProps) { 
   return(
      <Slot className="w-6 h-6 text-gray-400">
        { children }
      </Slot>
   );
}

Icon.displayName = 'TextInput.Icon';