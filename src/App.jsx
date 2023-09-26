import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContainer } from './components/CartContainer/CartContainer';

import RootLayout from './Layouts/RootLayout';
import DiscosLayout from './Layouts/DiscosLayout';
import CartContextProvider from './context/cartContext';

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
          <Route path='discos' element={<DiscosLayout/>}>
             <Route 
                index 
                element={<ItemListContainer />}
                />
              <Route  path='category/:idCategory' 
                      element={<ItemListContainer />} 
                      />
              <Route
                path=':id'
                element={<ItemDetailContainer/>}
              />
          </Route>
          <Route
            path='carrito'
            element={<CartContainer/>}
          />
          <Route index element={<Home saludo={'Bienvenido/a, gracias por elegirnos.'} /> } /> 
    </Route>
  )
  )
  
const prop = "mivalue"
function App() {
  return (
    <CartContextProvider>
        <RouterProvider router={router}/>
    </CartContextProvider>  
  )
}

export default App
