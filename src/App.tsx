import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";

import Redirect from "./components/Redirect";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "/", element: <Redirect></Redirect> },
      {
        path: "/home",
        element: <div></div>,
      },
      {
        path: "/rooms",
        element: <div></div>,
      },
      {
        path: "/users",
        element: <div></div>,
      },
      {
        path: "/devices",
        element: <div></div>,
      },
      {
        path: "/security",
        element: <div></div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
