import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import router from "./router/Router";
import AuthProvider from "./provider/AuthProvider";
// import Main from "./layouts/main/Main";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ChefDetails from "./layouts/ChefDetails";
import Main from "./layouts/main/Main";
import Blog from "./pages/blog/Blog";
import PrivateRoute from "./router/PrivateRoute";
const LazyHome = React.lazy(() => import("./pages/home/Home"));
// import AuthProvider, { AuthContext } from "./provider/AuthProvider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback="Loading...">
            <LazyHome></LazyHome>
          </React.Suspense>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/chefdata/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://foodie-crush-hunter-server-jihad-hossain1.vercel.app/chefdata/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
