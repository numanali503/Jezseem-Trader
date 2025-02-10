import React, { useState, useEffect } from "react";

const ServicesSection = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      setIsLoading(true);
      const storedProducts = localStorage.getItem("psLinks");

      if (storedProducts) {
        try {
          const data = JSON.parse(storedProducts);
          const filteredProducts = data.filter(
            (product) => product.categoryName === "products"
          );
          setProducts(filteredProducts);
        } catch (error) {
          console.error("Error parsing products:", error);
        }
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jezseem Traders's Top Products
          </h2>
          <div className="w-24 h-1 bg-greenPrimary mx-auto rounded-full"></div>
        </div>

        {products.length === 0 ? (
          <div className="text-center text-gray-600">
            No products available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <article
                key={product.id}
                className="group bg-white rounded-lg border border-greenPrimary overflow-hidden"
                onClick={() => (window.location.href = `/${product.linkURL}`)}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.linkName}
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "/placeholder-image.jpg";
                      e.target.onerror = null;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {product.linkName}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {product.overview}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <span className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-500 cursor-pointer">
                      Learn more
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
