import { useState } from 'react'

import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className='d-flex justify-content-start'>
        <Titulo />
      </div>
      <div>
        <ItemListContainer saludo={'Bienvenido/a, gracias por elegirnos.'}/>
      </div>
    </>
  )
}

export default App
