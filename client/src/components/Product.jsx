
const Product = ({product,handleAddToCart}) => {
  return (
    <div className="border rounded-lg p-5">
      <img
        src={product.image}
        alt="..."
        className="h-36 w-36 object-contain object-center mx-auto hover:scale-105 cursor-pointer"
      />
      <div className="mt-5">
        <p className="mb-2">{product.category}</p>

        <p className="my-2">
          Price : <span className="text-green-600 ">${product.price} </span>
        </p>
        <button
          className="bg-indigo-500 text-white outline-none text-xs rounded-lg cursor-pointer hover:scale-105 uppercase px-3 py-1"
          onClick={() => handleAddToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
