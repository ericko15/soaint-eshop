import React, {useCallback, useEffect, useState} from "react";
import {ProductsContext} from '../../ProductContext'

export const ProductListProvider = ({children}) => {
  const uri = 'https://fakestoreapi.com/products'
  const [products, setProducts] = useState([])

  const getProducts = useCallback(async () => {
    const response = await fetch(uri)
    const data = response.json()
    return data
  }, [])

  useEffect(() => {
    getProducts()
      .then(products => setProducts(products))
      .catch(() => setProducts(null))
  }, [getProducts])

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}
