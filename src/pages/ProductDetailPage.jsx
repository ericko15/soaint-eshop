import React, {useContext} from "react"
import {ProductDetailCard} from "../components/ProductDetailPage/ProductDetailCard"
import {makeStyles} from "@material-ui/core"
import {ProductDetailContext} from '../ProductContext'

const useStyles = makeStyles(() => ({
  root: {
    padding: '40px 20px'
  }
}))

export const ProductDetailPage = () => {
  const product = useContext(ProductDetailContext)

  console.log(product)

  const classes = useStyles()
  return product && (
    <div className={classes.root}>
      <ProductDetailCard product={product}/>
    </div>
  )
}
