import Grid from "@material-ui/core/Grid"
import {Card, makeStyles} from "@material-ui/core"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import React from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

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
  }
}))

export const ProductDetailCard = ({product}) => {
  const classes = useStyles()

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
            <Grid item>
              <Button variant="contained" color="primary" startIcon={<AddShoppingCartIcon/>}>
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </div>
    </Card>
  )
}
