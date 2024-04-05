import { Input, FormControl} from "native-base";

interface InputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    color?: string;
    Image?: string;
}

export function InputTexto ({
    placeholder,
    secureTextEntry = false,

} : InputProps) : JSX.Element {
    return (
        <FormControl mt={6}>
          <Input
          placeholder={placeholder}
          placeholderTextColor= 'orange.300'
          fontWeight='bold'
          fontSize='md'
          size='md'
          w='100%'
          borderRadius='md'
          bgColor='none'
          borderColor='0'
          p={2}
          secureTextEntry={secureTextEntry}
          variant="unstyled"
          >
          </Input>
        </FormControl>
    )
}