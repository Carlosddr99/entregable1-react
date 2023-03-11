import './App.css';
import { Greeting } from './componentes/Greeting.js';
import { ShowName } from './componentes/ShowName';
import { ShowDate } from './componentes/ShowDate';
import { ShowMessage } from './componentes/ShowMessage';
import { Loading} from './componentes/Loading'
import { Button } from './componentes/Button';
import { TextoEtiqueta } from './componentes/TextoEtiqueta';
import { PasswordBoton } from './componentes/PasswordBoton';
import  {Contador}  from './componentes/Contador';
import { BotonesCadena } from './componentes/BotonesCadena';

function App() {
  return (
    <div className="App">
      <Greeting></Greeting><br/>
      <ShowName></ShowName><br/>
      <ShowDate></ShowDate><br/>
      <ShowMessage></ShowMessage><br/>
      <Loading mostrar={true}><Greeting></Greeting></Loading><br/>
      <Button metodo={()=>console.log('holi')}></Button><br/>
      <TextoEtiqueta></TextoEtiqueta><br/>
      <PasswordBoton></PasswordBoton><br/>
      <Contador></Contador><br/>
      <BotonesCadena></BotonesCadena>
    </div>
  );
}

export default App;
