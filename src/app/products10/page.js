import ProductCard from "@/components/products/ProductCard";

const AllProductsPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const products = await res.json();
  // console.log(products);
  return (
    <div>
      <h1 className="text-3xl text-center">All Products</h1>
      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto my-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
