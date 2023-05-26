import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Gif from "../assets/logo/error.gif";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img className="w-52 md:w-64 rounded-md shadow-md" src={Gif} alt="" />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-warning hover:font-bold text-gray-900"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
