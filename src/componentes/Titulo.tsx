import { Text, ITextProps } from "native-base"
import {ReactNode} from "react"

interface TituloProps extends ITextProps{
    children: ReactNode;
    color?: string;
    textAlign?: string;
}
export function Titulo({children, color, textAlign}: TituloProps){
    return(
        <Text
            fontSize='xl'
            fontWeight='bold'
            color={ color || 'orange.900'}
            textAlign={textAlign || 'center'}
            mt={57}
      >
        {children}
      </Text>
    )
}