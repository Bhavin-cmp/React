import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log("Checking Error", error);
  return (
    <div id="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-red-950 text-4xl mb-4">Oooopss!</h1>
        <p className="text-lg mb-2">Sorry, an unexpected error occurred</p>
        <p className="text-gray-600">
          <i>
            <i className="text-gray-800">Reason :</i>{" "}
            {error?.statusText || error?.message || "Unknown error"}
          </i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
