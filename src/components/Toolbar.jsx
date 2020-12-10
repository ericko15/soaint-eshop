import React, {useContext} from "react";
import {makeStyles, AppBar, IconButton, Typography, Toolbar} from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {ShoppingCart} from "../ProductContext";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  titleMenu: {
    textAlign: 'center'
  },
  product:{
    paddingRight: 20
  },
  total: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 20
  }
}));

export const EShopToolbar = () => {
  const classes = useStyles()
  const {products, total} = useContext(ShoppingCart)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          My Shop
        </Typography>

        <div>
          <IconButton color="inherit" onClick={handleClick}>
            <Badge badgeContent={products.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Typography variant="h6" className={classes.titleMenu}>Lista de Productos</Typography>
            {products.map(product => (
              <MenuItem onClick={handleClose}>
                <Grid container spacing={3} justify="space-between" className={classes.product}>
                  <Grid item>
                    {product.title}
                  </Grid>
                  <Grid item>
                    ${product.price}
                  </Grid>
                </Grid>
              </MenuItem>
            ))}
            <MenuItem className={classes.total} onClick={handleClose}>
              <Typography>
                Total: {total}
              </Typography>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}
