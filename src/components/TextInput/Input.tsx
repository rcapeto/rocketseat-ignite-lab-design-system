import { InputHTMLAttributes } from 'react';

import { getClassName } from '../../utils/getClassName';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {

};

export function Input(props: TextInputProps) {
   const styles = {
      input: 'flex-1 outline-none',
      bg: 'bg-transparent',
      text: 'text-gray-100 text-xs',
      animation: 'placeholder:text-gray-400'
   }

   const className = getClassName(styles);

   return(
      <input 
         className={className}
         {...props }
      />
   );
};

Input.displayName = 'TextInput.Input';
