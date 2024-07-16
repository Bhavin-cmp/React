import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./Components/Home/Home.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Product from "./Components/Producrs/Products.jsx";
import Todo from "./Components/Todo/Todo.jsx";
import { Store } from "./Store.js";
import { Provider } from "react-redux";
import Practice from "./Components/Practice/Practice.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Product />} />
      <Route path="/todos" element={<Todo />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
