import { VStack, Image, Text, Box, FormControl, Input, Button, Link, Checkbox, Center, StatusBar} from "native-base";
import Logob from './assets/logoB.png';
import VoltarIcon from './assets/Voltar-icon.png';
import { design } from "./estilos/temas";
import { Titulo } from "./componentes/Titulo";
import { Botao } from "./componentes/Botao";
import { InputTexto } from "./componentes/InputTexto";
import {useState} from 'react';
import { secoes } from "./utils/CadastroInputTexto";

export default function Login() {

  const [numSecao, setNumeroSecao] = useState(0);

  function avancarSecao() {

    if(numSecao < secoes.length - 1) {
    setNumeroSecao(numSecao+1)
    }
  }

  function voltarSecao(){
    if(numSecao > 0){
      setNumeroSecao(numSecao -1)
    }
  }

  return (
    <VStack flex={1} backgroundColor={design.colors.orange[900]}>
      <StatusBar backgroundColor={design.colors.orange[900]}/>
      <Box w='75%' height='80%' backgroundColor={"orange.700"} borderRightRadius={995} mt={70}>
      </Box>
        <Box mt={-640} p={10}>

          <Botao variant="unstyled" mt={0} marginLeft={-100} color="0" onPress={() => voltarSecao()}>
            <Image source={VoltarIcon} alt='Icone de voltar'/>
          </Botao>

          <Image source={Logob} alt="Logo Up Mart" mb={0} marginLeft='100'/>

          <Titulo color='white' marginLeft={2} textAlign="Left">
            {secoes[numSecao].titulo}
          </Titulo>
      
          <Box>
            {
              secoes[numSecao].InputTexto. map(entrada => {
                return <InputTexto placeholder={entrada.placeholder} key={entrada.id}/>
              })
            }
          </Box>
        </Box>
  
      <Botao 
          bgColor='white' 
          color='orange.900' 
          fontWeight='bold'
          onPress={() => avancarSecao()}
          mt={-12}
          margin="15%"
          > 
          Continuar
      </Botao>
    </VStack>
  );
}