import { ScrollView, Text, StatusBar} from "native-base";
import { design } from "../estilos/temas";

export default function Carteira(){
    return(
        <ScrollView flex={1} backgroundColor='gray.700'>
        <StatusBar backgroundColor={design.colors.gray[700]}/>
            <Text>Carteira</Text>
        </ScrollView>
    )
}