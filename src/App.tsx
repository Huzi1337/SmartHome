import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";

import Redirect from "./components/Redirect";
import RootLayout from "./components/RootLayout";
import Rooms from "./components/pages/Rooms";
import Home from "./components/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "/", element: <Redirect></Redirect> },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
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
