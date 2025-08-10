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
import UpdateProfile from "../pages/profile/UpdateProfile";
import ArtifactDetails from "../pages/home/FeatureArtifacts.jsx/topArtifacts/ArtifactDetails";

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
          fetch(`https://assignment-011-server-side.vercel.app/user?email=${params.email}`, {
            credentials: "include",
            method: "GET",
          }),
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/addArtifact",
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
        hydrateFallbackElement: <div className="w-fit mx-auto my-10"><span className="loading loading-bars loading-xs"></span></div>,
        path: "/allArtifact",
        element: <AllArtifacts></AllArtifacts>,
      },
      {
        hydrateFallbackElement: (
          <div className="w-fit mx-auto">
            <span className="loading loading-bars loading-xs"></span>
          </div>
        ),
        path: "/details/:id",
        loader: ({ params }) => fetch(`https://assignment-011-server-side.vercel.app/artifact/${params.id}`),
        element: <Details></Details>,
      },

      {
        path: "/liked",
        element: (
          <PrivateRoute>
            <Liked></Liked>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateCart/:id",
        loader: ({ params }) => fetch(`https://assignment-011-server-side.vercel.app/artifact/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateCart></UpdateCart>
          </PrivateRoute>
        ),
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
      {
        path: "/artifactDetails/:id",
        loader: ({ params }) => fetch(`https://assignment-011-server-side.vercel.app/artifact/${params.id}`),
        hydrateFallbackElement: <div className="w-fit mx-auto my-10"><span className="loading loading-bars loading-xs"></span></div>,
        Component: ArtifactDetails,
      },
    ],
  },
]);

export default router;
