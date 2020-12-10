import React, {useContext} from 'react'
import {ProductCard} from "../components/ProductsPage/ProductCard"
import {makeStyles, Typography} from "@material-ui/core"
import {ProductsContext} from '../ProductContext'
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"
import ErrorIcon from '@material-ui/icons/Error'

const useStyles = makeStyles(() => ({
  root: {
    padding: '40px 40px'
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

export const ProductsPage = () => {
  const classes = useStyles()
  const products = useContext(ProductsContext)

  if (products === null) {
    return (
      <div className={classes.loading}>
        <ErrorIcon fontSize="large" color="error"/>
        <Typography>
          Error al cargar los productos
        </Typography>

      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className={classes.loading}>
        <CircularProgress/>
        <Typography component="p">
          Cargando productos
        </Typography>
      </div>
    )
  }

  return products.length > 0 && (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid key={product.id} item lg={3} md={4} sm={6} xs={12}>
            <ProductCard product={product}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
