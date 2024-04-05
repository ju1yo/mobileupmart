import { Button, IButtonProps } from "native-base";
import {ReactNode} from 'react';

interface ButtonProps extends IButtonProps {
    children: ReactNode;
    color?: string;
}

export function Botao({children, color, ...rest}: ButtonProps){
    return (
        <Button
        w='70%'
        h='9%'
        bg={color || 'orange.900'}
        shadow={15}
        mt={12}
        borderRadius='md'
        _text={{color: color || 'white', fontWeight: 'bold'}}
        {...rest}
      >
          {children}
      </Button>
    )
}