import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const image = "../../../public/wanderlust.jpg"; // Assuming the image is in public
  return (
    <div className="header relative overflow-hidden">
      <nav className="bg-white border border-gray-200 flex gap-2  px-4 lg:px-6 py-2.5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 text-xl font-semibold"
              : "text-gray-600 text-xl"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 text-xl font-semibold "
              : "text-gray-600 text-xl"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/todos"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 text-xl font-semibold"
              : "text-gray-600 text-xl"
          }
        >
          Todo
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 text-xl font-semibold"
              : "text-gray-600 text-xl"
          }
        >
          ContactUs
        </NavLink>
        <NavLink
          to="/practice"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 text-xl font-semibold"
              : "text-gray-600 text-xl"
          }
        >
          Practice React
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 text-xl font-semibold"
              : "text-xl text-gray-600"
          }
        >
          AboutUs
        </NavLink>

        <div className="searchBar ml-auto">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md p-1"
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
