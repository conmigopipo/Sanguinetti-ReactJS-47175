import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext ([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    const isProduct = (id) => cartList.findIndex(disco => disco.id === id)

    const addProduct = (newProduct)=>{
        const index = isProduct(newProduct.id)
        if (index !== -1) {
                    cartList[index].quantity += newProduct.quantity 
                    setCartList([...cartList])  
                } else {
                    setCartList([
                        ...cartList,
                        newProduct
                    ])            
                }
    
    }

    const cantidadTotal = ()=> cartList.reduce ((cantidadTotal, objCart)=> cantidadTotal += objCart.quantity,0)
    const precioTotal = ()=> cartList.reduce((precioTotal, objCart)=> precioTotal += (objCart.precio * objCart.quantity),0)
    const eliminarProducto = (pid) => setCartList(cartList.filter(prod => prod.id !== pid))
    const emptyCart = ()=> {
        setCartList([])
  

    }
        return (
            <CartContext.Provider value={{
                cartList,
                addProduct,
                cantidadTotal,
                precioTotal,
                emptyCart,
                eliminarProducto
            }}>
                {children}
            </CartContext.Provider>
        )
}

export default CartContextProvider



