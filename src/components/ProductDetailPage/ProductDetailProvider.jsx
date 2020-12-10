import React, {useCallback, useEffect, useState} from "react";
import {ProductDetailContext} from '../../ProductContext'

export const ProductDetailProvider = (props) => {
  const {children, match} = props
  const [product, setProduct] = useState({})
  const {productId}= match.params

  const getProduct = useCallback(async () => {
    if (!!productId && productId !== '') {
      const uri = `https://fakestoreapi.com/products/${productId}`
      const response = await fetch(uri)
      return response.json()
    }
    return null
  }, [productId])

  useEffect(() => {
    getProduct()
      .then(products => setProduct(products))
      .catch(() => setProduct(null))
  }, [getProduct])

  return (
    <ProductDetailContext.Provider value={product}>
      {children}
    </ProductDetailContext.Provider>
  )
}
