import React, { useState } from "react";

const ProductModal = ({ product, isOpen, onClose }) => {
  // console.log("modal product", product);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;
  // console.log("checking",typeof product.images)

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded shadow-lg max-w-md w-full">
        <button
          className="absolute top-2 right-2 text-gray-500 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <div className="product-images mb-4 relative">
          <img
            src={product.images[currentImageIndex]}
            alt={`${product.title} - ${currentImageIndex + 1}`}
            className="w-1/2 h-auto images m-auto"
          />
          {product.images.length > 1 && (
            <>
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl bg-white p-1 rounded-full shadow"
                onClick={handlePrevious}
              >
                &lt;
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl bg-white p-1 rounded-full shadow"
                onClick={handleNext}
              >
                &gt;
              </button>
            </>
          )}
        </div>
        <p>
          <b>Brand:</b> {product.brand} (
          <samp>{product.warrantyInformation}</samp>)
        </p>
        <p>
          <b>Price : </b> ${product.price} {""}
        </p>
        <p>
          <b>Rating:</b> {product.rating}
        </p>
        <p>
          <b>Description:</b> {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductModal;
