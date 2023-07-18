import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MantineProvider, createEmotionCache } from "@mantine/core";
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

const myCache = createEmotionCache({
  key: "mantine",
  prepend: false,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider emotionCache={myCache}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
