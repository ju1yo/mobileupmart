import { VStack, Image, Text, Box, FormControl, Input, Button, Link, Checkbox, StatusBar} from "native-base";
import Logo from './assets/logoL.png'
import Google from './assets/google.png'
import Facebook from './assets/facebook.png'
import { design } from "./estilos/temas";
import { TouchableOpacity } from "react-native";
import { Titulo } from "./componentes/Titulo";
import { Botao } from "./componentes/Botao";
import { InputTexto } from "./componentes/InputTexto";

export default function Login({navigation}) {
  return (
    <VStack flex={1} alignItems='center' p={5} backgroundColor={design.colors.gray[900]}>
      <StatusBar backgroundColor={design.colors.gray[900]}/>
      <Image source={Logo} alt="Logo Up Mart" mt={31}/>
      <Titulo>
        Faça seu login :)
      </Titulo>

      <Box>
      <FormControl mt={6}>
          <Input
          placeholder='Digite seu e-mail'
          placeholderTextColor='gray.300'
          fontWeight='bold'
          size='md'
          w='100%'
          borderRadius='md'
          bgColor='gray.500'
          borderColor='gray.500'
          p={15}
          >
          </Input>
        </FormControl>

        <FormControl mt={3}>
          <Input
          placeholder='Digite sua senha'
          placeholderTextColor='gray.300'
          fontWeight='bold'
          size='md'
          w='100%'
          borderRadius='md'
          bgColor='gray.500'
          borderColor='gray.500'
          p={15}
          >
          </Input>
        </FormControl>
      </Box>

      <Box w='100%' flexDirection='row' justifyContent='center'>
        <Checkbox 
        value="test"
        bgColor='gray.500' 
        borderColor='gray.500' 
        mt={3}
        >
          <Text fontWeight='bold' fontSize='sm' color='gray.300'> Me lembre </Text>
        </Checkbox> 

        <Link href='https://www.am.senac.br' mt={3}>
          <Text 
          underline 
          color='orange.900' 
          fontSize='sm' 
          fontWeight='bold' 
          marginLeft={20}
          >
          Esqueceu sua senha?
          </Text>
        </Link>
      </Box>

      <Text 
      mt={10} 
      color='orange.900' 
      fontWeight='bold' 
      fontSize='sm'
      >
        Ou entre com:
      </Text>

      <Box w='100%' flexDirection='row' justifyContent='center'>
        <Link href="https://accounts.google.com">
          <Image 
          source={Google} 
          alt="Logo Google" 
          mt={4} 
          shadow={3} 
          m={2}
          />
        </Link>

        <Link href="https://pt-br.facebook.com/">
          <Image 
          source={Facebook} 
          alt="Logo Facebook"
          mt={4} 
          shadow={3} 
          m={2}
          />
        </Link>
      </Box>

      <Botao fontWeight='bold' onPress={() => navigation.navigate('Tabs') } variant="unstyled">Entrar</Botao>

      <Box w='100%' flexDirection='row' justifyContent='center'>
        <Text 
        color='orange.900' 
        fontSize='sm' 
        fontWeight='bold'
        >
        Não tem uma conta? 
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text 
          color='orange.900' 
          underline 
          fontSize='sm' 
          fontWeight='bold'
          marginLeft={1}
          > 
          Crie aqui
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}