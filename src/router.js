import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import {ProductsPage} from "./pages/ProductsPage";
import {EShopToolbar} from "./components/Toolbar";
import {ProductDetailPage} from "./pages/ProductDetailPage";
import {ProductListProvider} from "./components/ProductsPage/ProductListProvider";
import {ProductDetailProvider} from "./components/ProductDetailPage/ProductDetailProvider";
import {ShoppingCartProvider} from "./components/ShoppingCartProvider";

export const EShopRouter = () => (
  <ShoppingCartProvider>
    <EShopToolbar/>
    <Router>
      <Switch>
        <Route path="/" exact>
          <ProductListProvider>
            <ProductsPage/>
          </ProductListProvider>
        </Route>
        <Route exact path="/:productId" render={(props) => (
          <ProductDetailProvider {...props}>
            <ProductDetailPage/>
          </ProductDetailProvider>
        )}/>
      </Switch>
    </Router>
  </ShoppingCartProvider>
)
