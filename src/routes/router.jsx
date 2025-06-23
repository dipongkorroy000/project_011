import React from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../pages/profile/Profile";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/home/Home";
import AddArtifact from "../pages/addArtifacts/AddArtifact";
import MyArtifacts from "../pages/myArtifacts/MyArtifacts";
import AllArtifacts from "../pages/allArtifacts/AllArtifacts";
import Details from "../pages/allArtifacts/Details";
import Liked from "../pages/likedArtifacts/Liked";
import UpdateCart from "../pages/myArtifacts/UpdateCart";
import Error from "../components/error/Error";
import Search from "../pages/Search/Search";
import UpdateProfile from "../pages/profile/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
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
        path: "/profile/:email",
        loader: ({ params }) =>
          fetch(
            `https://assignment-011-server-side.vercel.app/user?email=${params.email}`,
            {
              credentials: "include",
              method:"GET"
            }
          ),
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/addArtifact/:email",
        loader: ({ params }) =>
          fetch(
            `https://assignment-011-server-side.vercel.app/user?email=${params.email}`,
            {
              credentials: "include",
            }
          ),
        element: (
          <PrivateRoute>
            <AddArtifact></AddArtifact>
          </PrivateRoute>
        ),
      },
      {
        path: "/myArtifact",
        element: (
          <PrivateRoute>
            <MyArtifacts></MyArtifacts>
          </PrivateRoute>
        ),
      },
      {
        hydrateFallbackElement: (
          <span className="loading loading-ring loading-xl mx-auto"></span>
        ),
        path: "/allArtifact",
        element: <AllArtifacts></AllArtifacts>,
      },
      {
        hydrateFallbackElement: (
          <div className="flex justify-center">
            <span className="loading loading-ring loading-xl border"></span>
          </div>
        ),
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-011-server-side.vercel.app/artifact/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },

      {
        path: "/liked",
        loader: () =>
          fetch("https://assignment-011-server-side.vercel.app/artifact"),
        element: <Liked></Liked>,
      },
      {
        path: "/updateCart/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-011-server-side.vercel.app/artifact/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateCart></UpdateCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/search",
        loader: () =>
          fetch("https://assignment-011-server-side.vercel.app/artifact"),
        element: <Search></Search>,
      },
      {
        path: "/updateProfile",
        // loader: () =>
          // fetch("https://assignment-011-server-side.vercel.app/user", {
          //   credentials: 'include',
          // }),
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
