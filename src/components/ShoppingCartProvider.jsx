import {ShoppingCart} from '../ProductContext'
import {useEffect, useState} from "react";

export const ShoppingCartProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)

  const handleAddProduct = (product) => {
    setProducts(v => [...v, {...product}])
  }

  useEffect(() => {
    if (products) {
      let calculateTotal = 0
      products.forEach((product) => {
        calculateTotal += product.price
      })
      setTotal(calculateTotal)
    }
  }, [products])


  return (
    <ShoppingCart.Provider value={{products, handleAddProduct, total}}>
      {children}
    </ShoppingCart.Provider>
  )
}
