import React from "react";

const Home = () => {
  const image = "../../../public/wanderlust.jpg"; // Assuming the image is in public

  return (
    <div className="relative overflow-hidden"> {/* Container styles */}
      <img
        src={image}
        alt="Background Image"
        className="w-full h-auto object-cover opacity-50" // Add opacity class
      />
      <div className="absolute inset-0 flex justify-center items-center"> {/* Text overlay */}
        <h1 className="text-3xl text-white font-bold text-center">
          Welcome to the my Travel blogs
        </h1>
      </div>
    </div>
  );
};

export default Home;
