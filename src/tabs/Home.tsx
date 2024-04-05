import { ScrollView, Text, StatusBar, Button, Image, Box, Column, VStack, Center} from "native-base";
import { design } from "../estilos/temas";
import Fotoperfil from "./icons/fotoperfil.png"

export default function Home(){
    return(
        <ScrollView flex={1} backgroundColor='gray.700'>
        <StatusBar backgroundColor={design.colors.gray[700]}/>
        <Box w='100%' flexDirection='row' marginTop={10}>
            <Button backgroundColor='0'>
                <Image source={Fotoperfil}/>
            </Button>
            <Text mt='3' fontSize='xl'>Ei, Carla!</Text>
            <Text>Vamos comprar hoje?</Text>           
        </Box>
        </ScrollView>
    )
}