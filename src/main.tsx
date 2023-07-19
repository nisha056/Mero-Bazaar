import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import ChatInterface from "./components/pages/ChatInterface";
import Home from "./components/pages/Home";
import Notification from "./components/pages/Notification";
import Profile from "./components/pages/Profile";
import Add from "./components/pages/Add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/chat",
        element: <ChatInterface />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/notification",
        element: <Notification />
      },
      {
        path: "/profile",
        element: <Profile />
      },
    ],
  },
]);

const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  rootElement
);







