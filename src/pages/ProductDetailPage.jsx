import React, {useContext} from "react"
import {ProductDetailCard} from "../components/ProductDetailPage/ProductDetailCard"
import {makeStyles, Typography} from "@material-ui/core"
import {ProductDetailContext} from '../ProductContext'
import ErrorIcon from "@material-ui/icons/Error";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
  root: {
    padding: '40px 20px'
  },
  loading: {
    width: '100%',
    height: 'calc(100vh - 64px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '& p': {
      marginTop: 15
    }
  }
}))

export const ProductDetailPage = () => {
  const classes = useStyles()
  const product = useContext(ProductDetailContext)

  if (product === null) {
    return (
      <div className={classes.loading}>
        <ErrorIcon fontSize="large" color="error"/>
        <Typography>
          Error al cargar los productos
        </Typography>

      </div>
    )
  }

  if (!product.id) {
    return (
      <div className={classes.loading}>
        <CircularProgress/>
        <Typography component="p">
          Cargando producto
        </Typography>
      </div>
    )
  }

  return product && (
    <div className={classes.root}>
      <ProductDetailCard product={product}/>
    </div>
  )
}
