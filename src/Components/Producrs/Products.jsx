// import React, { useEffect, useState } from "react";
// import loader from "../../assets/Spinner.gif";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
// import ProductModal from "./ProductModal";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const spinner = "../../assets/Spinner.gif";
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://dummyjson.com/products");
//         if (!response.ok) {
//           throw new Error("Something is wrong");
//         }
//         const result = await response.json();
//         setProducts(result.products);
//       } catch (error) {
//         setError(error.message);
//         console.error("Error occured : ", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 >= 0.5;

//     return (
//       <>
//         {Array.from({ length: fullStars }).map((_, i) => (
//           <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
//         ))}
//         {hasHalfStar && (
//           <FontAwesomeIcon
//             key="half"
//             icon={faStarHalfAlt}
//             className="text-yellow-500"
//           />
//         )}
//         {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map(
//           (_, i) => (
//             <FontAwesomeIcon
//               key={i + fullStars + (hasHalfStar ? 1 : 0)}
//               icon={faStar}
//               className="text-gray-400"
//             />
//           )
//         )}
//       </>
//     );
//   };

//   if (loading) {
//     return (
//       <div className="loader m-auto flex align-middle justify-center h-24 w-24">
//         <img src={loader} alt="Loading..." />
//       </div>
//     );
//   }

//   if (error) {
//     return <div>Error : {error}</div>;
//   }
//   // products.map((data) => {console.log("productTtile", data.images)});
//   // console.log("checking Product Data", products.images);

//   return (
//     <div className="p-4">
//       <div className="productTitle mb-4">
//         <h1 className="text-3xl font-bold text-yellow-400">Products Lists</h1>
//         {/*
//         <div>
//           <img src={loader} alt="" />
//         </div> */}
//       </div>
//       <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product.id} className="p-4 border rounded shadow flex">
//             <div
//               className="productImage p-4  mr-4 mb-4 md:mb-0 md:w-1/3 cursor-pointer"
//               onClick={() => setSelectedProduct(product)}
//             >
//               <img
//                 src={product.thumbnail}
//                 alt={product.title}
//                 className="w-full h-auto"
//               />
//             </div>
//             <div className="productInfo md:w-2/3 flex flex-col justify-center">
//               <span className="block mb-2">
//                 <b>Product Name : {""}</b>
//                 {product.title}
//               </span>
//               <span className="block mb-2">
//                 <b>Price : </b>
//                 {product.price}
//               </span>
//               {/*  <span className="block mb-2 flex items-center">
//                 <b>Rating:</b>{" "}
//                 <span className="ml-2">{renderStars(product.rating)}</span>{" "}
//                 <span className="ml-2">({product.rating})</span>
//               </span> */}
//               <span className=" mb-2 flex items-center">
//                 <b>Rating:</b>{" "}
//                 <span className="ml-2">{renderStars(product.rating)}</span>{" "}
//                 <span className="ml-2">({product.rating})</span>
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//       {selectedProduct && (
//         <ProductModal
//           product={selectedProduct}
//           isOpen={!!selectedProduct}
//           onClose={() => setSelectedProduct(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default Products;

//! This is now using Redux ToolQuery

import React, { useState, useEffect } from "react";
import loader from "../../assets/Spinner.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import ProductModal from "./ProductModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/Todo/ProductSlice";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  /*const state = useSelector((state) => {
    console.log("checking selector", state.todos);
    return state.products;
  });
  const { products, error, loading } = state;*/

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <>
        {Array.from({ length: fullStars }).map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
        ))}
        {hasHalfStar && (
          <FontAwesomeIcon
            key="half"
            icon={faStarHalfAlt}
            className="text-yellow-500"
          />
        )}
        {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map(
          (_, i) => (
            <FontAwesomeIcon
              key={i + fullStars + (hasHalfStar ? 1 : 0)}
              icon={faStar}
              className="text-gray-400"
            />
          )
        )}
      </>
    );
  };
  if (loading) {
    return (
      <div className="loader m-auto flex align-middle justify-center h-24 w-24">
        <img src={loader} alt="Loading..." />
      </div>
    );
  }

  if (error) {
    return <div>Error : {error}</div>;
  }

  return (
    <div>
      {" "}
      <div className="p-4">
        <div className="productTitle mb-4">
          <h1 className="text-3xl font-bold text-yellow-400">Products Lists</h1>
        </div>
        <div className="productName grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 border rounded shadow flex">
              <div
                className="productImage p-4  mr-4 mb-4 md:mb-0 md:w-1/3 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-auto"
                />
              </div>
              <div className="productInfo md:w-2/3 flex flex-col justify-center">
                {" "}
                <span className="block mb-2">
                  <b>Product Name : {""}</b>
                  {product.title}
                </span>
                <span className="block mb-2">
                  <b>Price : </b>
                  {product.price}
                </span>
                <span className=" mb-2 flex items-center">
                  <b>Rating:</b>{" "}
                  <span className="ml-2">{renderStars(product.rating)}</span>{" "}
                  <span className="ml-2">({product.rating})</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Products;
