import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import ItemListContainer, {discosLoader} from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer, { discoDetalleLoader } from './components/ItemDetailContainer/ItemDetailContainer'
import CatHipHopListContainer from './components/Categorías/CatHipHop/CatHipHopListContainer';
import CatRockListContainer from './components/Categorías/CatRock/CatRockListContainer';

import RootLayout from './Layouts/RootLayout';
import DiscosLayout from './Layouts/DiscosLayout';
import { CartContext } from './context/cartContext';

const prop = "mivalue"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
          
          <Route path='discos' element={<DiscosLayout/>}>
             <Route 
                index 
                element={<ItemListContainer />}
                loader={discosLoader}
                />
              <Route  path='hip-hop' 
                      element={<CatHipHopListContainer/>} 
                      loader={discosLoader}/>
              <Route  path='rock' 
                      element={<CatRockListContainer/>} 
                      loader={discosLoader}/>
              <Route
                path=':id'
                element={<ItemDetailContainer/>}
                loader={discoDetalleLoader}
              />
          </Route>
          <Route index element={<Home saludo={'Bienvenido/a, gracias por elegirnos.'} /> } /> 
    </Route>
  )
)

function App() {
  return (
    <CartContext.Provider 
    value={prop}>
        <RouterProvider router={router}/>
    </CartContext.Provider>  
  )
}

export default App
