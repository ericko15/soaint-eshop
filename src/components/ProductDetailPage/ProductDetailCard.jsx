import Grid from "@material-ui/core/Grid"
import {Card, makeStyles} from "@material-ui/core"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import React, {useContext} from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";
import {ShoppingCart} from "../../ProductContext";

const useStyles = makeStyles(() => ({
  root: {
    margin: '0 auto',
    display: 'flex',
    maxWidth: 900
  },
  media: {
    height: '100%',
    maxWidth: 300,
    padding: 20
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  description:{
    margin: '15px 0'
  },
  goToBack:{
    textDecoration: 'none'
  }
}))

export const ProductDetailCard = ({product}) => {
  const classes = useStyles()
  const {handleAddProduct} = useContext(ShoppingCart)

  const handleClick = () => {
    handleAddProduct(product)
  }

  return (
    <Card className={classes.root}>
      <CardMedia component="img" title={product.title} image={product.image} className={classes.media}/>
      <div className={classes.details}>
        <CardContent>
          <Grid container direction="column" justify="space-between">
            <Grid item>
              <Typography variant="h4">
                {product.title}
              </Typography>
            </Grid>
            <Grid item className={classes.description}>
              <Typography variant="h6">
                Product description
              </Typography>
              <Typography component="p">
                {product.description}
              </Typography>
            </Grid>
            <Grid item container spacing={1}>
              <Grid item>
                <Link to="/" className={classes.goToBack}>
                  <Button variant="contained" color="primary" startIcon={<ArrowBackIcon/>}>
                    Go to Back
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Button onClick={handleClick} variant="contained" color="primary" startIcon={<AddShoppingCartIcon/>}>
                  Add to cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </div>
    </Card>
  )
}
