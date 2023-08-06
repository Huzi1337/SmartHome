import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";

import Redirect from "./components/Redirect";
import RootLayout from "./components/RootLayout";
import Rooms from "./components/pages/Rooms";

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
