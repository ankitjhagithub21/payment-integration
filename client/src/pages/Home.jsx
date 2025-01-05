import Product from "../components/Product";

const Home = ({loading,products,handleAddToCart}) => {


  return (
    <div className="max-w-6xl mx-auto w-full my-24 px-5 grid lg:grid-cols-5 grid-cols-3 gap-5">
      {loading
        ? "Loading..."
        : products.map((product) => {
            return <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
          })}
    </div>
  );
};

export default Home;
