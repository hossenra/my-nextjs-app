import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
import React from "react";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 5,
    },
  });
  const products = await res.json();
  // console.log(products);
  return (
    <div>
      <h1 className="text-center text-4xl my-5">
        Data Fetching, Caching, and Revalidation and New Update
      </h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link href="/products">See More</Link>
    </div>
  );
};

export default HomePage;
