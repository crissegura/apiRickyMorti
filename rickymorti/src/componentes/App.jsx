import '../../src/App.css';
import Personajes from '../Personajes';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from 'react';
import Navbarr from './Navbar';


function App() {

  const [ texto, setTexto ] = useState([])
  const [ personaje, setPersonaje ] = useState ([]);

  const getTexto = ({target}) => { 
    setTexto(target.value)
  }

  console.log(texto)

  const getData = () => {

    const URL = 'https://rickandmortyapi.com/api/character';

    fetch(URL)
        .then((resp)=> resp.json())
        .then((data)=> setPersonaje(data.results))

  }

    useEffect(()=>{
        getData()
    },[])



  const bPersonaje = personaje.filter(x=>x.name.toLowerCase().includes(texto.toString().toLowerCase()))

  return (
    <div className="App">
      <Navbarr getTexto={getTexto} texto={texto} />
      <Personajes texto={texto}  personaje={bPersonaje}/>
    </div>
  );
}

export default App;
