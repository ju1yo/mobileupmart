import Login from "./src/Login";
import Cadastro from "./src/Cadastro"
import { NativeBaseProvider} from "native-base";
import { design } from './src/estilos/temas';
import Rotas from "./src/rotas";

export default function App() {
  return (
    <NativeBaseProvider theme={design}>
      <Rotas/>
    </NativeBaseProvider>
  );
}   
