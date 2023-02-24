
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import Root from "./routes/root"
import Error from "./routes/error"
import Catty from './routes/Info';
import Experiences from './routes/Experiences';
import Home from './routes/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {

        path: "/home",
        element: <Home />

      },
      {

        path: "/info",
        element: <Catty />

      },
      {

        path: "/experiences",
        element: <Experiences />

      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);