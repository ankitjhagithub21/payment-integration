import { useMemo} from "react";
import CartItem from "../components/CartItem";
import {loadStripe} from '@stripe/stripe-js';

const Cart = ({ cart, setCart }) => {
  

  const incrementQuantity = (productId) => {
    const updatedCart = cart.map((p) =>
      p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
    );
    setCart(updatedCart);
  };

  const decrementQuantity = (productId, quan) => {
    if (quan > 1) {
      const updatedCart = cart.map((p) =>
        p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
      );
      setCart(updatedCart);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((p) => p.id !== productId));
  };
  

  
  const totalPrice = useMemo(()=>{
    return cart.reduce((sum,item) => sum+item.quantity*item.price ,0);
  },[cart])

  

  const handleCheckout = async() =>{
   try{
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY)

    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/create-checkout-session`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({cart})
    })
    const session = await res.json();

    console.log(session)
    const result = stripe.redirectToCheckout({
      sessionId:session.id
    })

   }catch(error){
    console.log(error)
   }
  }

  
  


  return (
    <section className="py-24 px-5">
      <h2 className="text-2xl font-bold text-center mb-5">Your Cart</h2>
     
     {
       totalPrice > 0 &&  <div className=" p-5 font-semibold">
       <div className="flex flex-col w-fit gap-3 border p-3 rounded-lg">
       Total Price : ${totalPrice.toFixed(2)}
       <button className="bg-indigo-500 text-white px-3 text-sm rounded-lg py-1" onClick={handleCheckout}>Checkout</button>
       </div>
     </div>
     }
      <div className="max-w-6xl mx-auto w-full  flex flex-col gap-3">
        {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map((item) => {
          return (
           <CartItem key={item.id} item={item} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeFromCart={removeFromCart}/>
          );
        })}
      </div>
      
    </section>
  );
};

export default Cart;
