import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import { ShoppingCartContextProvider } from "./contexts/shoppingCartContext";
import Header from "./components/layout/header";
import Home from "./containers/home/home";
import ShoppingCart from "./containers/shoppingcart/shoppingCart";
import Analysis from "./containers/analysis/analysis";
import * as ROUTES from "./assets/constants/routers";

function App() {
  return (
    <Container maxWidth="sm">
      <header>
        <Header />
      </header>
      <main>
        <ShoppingCartContextProvider>
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <Home />
            </Route>
            <Route path={ROUTES.SHOPPING_CART}>
              <ShoppingCart />
            </Route>
            <Route path={ROUTES.ANALYSIS}>
              <Analysis />
            </Route>
          </Switch>
        </ShoppingCartContextProvider>
      </main>
    </Container>
  );
}

export default App;
