import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Cart from "./pages/Cart";
import { useState,useEffect } from "react";
import Header from "./components/Header";

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchProducts = () => {
      setLoading(true)
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          setLoading(false);
        });
    };
   fetchProducts()
  }, []);

  const handleAddToCart = (product) => {
    const index = cart.findIndex((item)=>item.id === product.id)
    if(index <0){
      const newProduct = {...product,quantity:1}
      setCart([newProduct,...cart])
    }else{
      const updatedCart = cart.map((p) =>
        p.id === product.id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
      setCart(updatedCart);
     
    }
    
    alert("Item added to cart.");
   
    
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home loading={loading} products={products} handleAddToCart={handleAddToCart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>}
        />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
