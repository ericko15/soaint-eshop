import Card from "@material-ui/core/Card"
import React, {useContext} from "react"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActions from "@material-ui/core/CardActions"
import {makeStyles} from "@material-ui/core"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import {Link} from 'react-router-dom'

import {ShoppingCart} from '../../ProductContext'

const useStyles = makeStyles(() => ({
  root: {},
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  title: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  }
}))

export const ProductCard = ({product}) => {
  const classes = useStyles()
  const {handleAddProduct} = useContext(ShoppingCart)

  const handleClickProduct = () => {
    handleAddProduct(product)
  }


  return (
    <Card className={classes.root} elevation={2}>
      <Link to={`/${product.id}`}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.title}
        />
      </Link>
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary" className={classes.title}>
          {product.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="subtitle1" color="secondary" component="p">
              ${product.price}
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={handleClickProduct} startIcon={<AddShoppingCartIcon/>} variant="contained" color="primary">
              Add to cart
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}
