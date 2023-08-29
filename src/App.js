import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Market from "./pages/Market";
import Details from "./pages/Details";
import Cart from "./components/Cart";
import Default from "./pages/Default";
import Modal from './components/Modal';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Customize from "./pages/Customize"

import Store from "./pages/new/Store"
import EpsiBot from "./pages/EpsiBot"
import EpsiPlus from "./pages/new/EpsiPlus"
import Accessories from "./pages/Accessories"
import Support from "./pages/new/Support"

function App() {
  return (
    <React.Fragment>
      <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/market" component={Market} />
          <Route path="/customize" component={Customize} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />


          <Route exact path="/" component={Home} />
          <Route path="/store" component={Store} />
          <Route path="/epsibot" component={EpsiBot} />
          <Route path="/epsiplus" component={EpsiPlus} />
          <Route path="/accessories" component={Accessories} />
          <Route path="/support" component={Support} />

          <Route component={Default} />
        </Switch>
      <Modal />
      
    </React.Fragment>
  );
}

export default App;


