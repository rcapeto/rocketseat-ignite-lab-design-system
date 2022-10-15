import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

import { getClassName } from '../../utils/getClassName';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {

};

export function Checkbox(props: CheckboxProps) {
   const styles = {
      checkbox: 'w-6 h-6 p-[2px] rounded',
      bg: 'bg-gray-800'
   };

   const className = getClassName(styles);

   return(
     <CheckboxPrimitive.Root className={className} {...props}>
         <CheckboxPrimitive.Indicator asChild>
            <Check weight="bold" className="h-5 w-5 text-cyan-500" />
         </CheckboxPrimitive.Indicator>
     </CheckboxPrimitive.Root>
   );
}