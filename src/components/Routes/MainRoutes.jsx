import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider} from "react-redux";
import store from '../store/store';
import NavBar from "../NavbarContainer/NavBar";
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Product from '../Pages/Product';
import Cart from '../Pages/Cart';


export const MainRoutes = () => {
  return(
    <Provider store={store}>
      <Router>
            <NavBar />
            <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/products" element={<Products />}/>
            <Route exact path="/products/:id" element={<Product />}/>
            <Route exact path="/cart" element={<Cart />}/>
          </Routes>
          
      </Router>
      </Provider>
  );
};
export default MainRoutes;