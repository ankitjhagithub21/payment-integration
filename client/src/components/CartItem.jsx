

const CartItem = ({item,incrementQuantity,decrementQuantity,removeFromCart}) => {
  return (
    <div className="grid grid-cols-5 items-center border p-3 rounded-lg">
      <div>
        <img
          src={item.image}
          alt="..."
          className="w-10 h-10 object-contain mx-auto"
        />
      </div>

      <div className="text-center">$ {item.price}</div>

      <div className="flex items-center gap-2 justify-center">
        <button
          className="text-sm px-2 py-1 bg-red-500 cursor-pointer text-white rounded-lg"
          onClick={() => decrementQuantity(item.id, item.quantity)}
        >
          -
        </button>
        {item.quantity}
        <button
          className="text-sm px-2 py-1 bg-green-500 cursor-pointer text-white rounded-lg"
          onClick={() => incrementQuantity(item.id)}
        >
          +
        </button>
      </div>

      <div className="text-center">
        $ {(item.price * item.quantity).toFixed(2)}
      </div>
      <div className="text-center">
        <button
          className="bg-red-500 text-white rounded-lg text-sm cursor-pointer px-2 py-1"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
