import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import NewOrder from "./routes/neworder";
import MassOrder from "./routes/massorder";
import Services from "./routes/services";
import Orders from "./routes/orders";
const router= createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<ErrorPage />,
        children:[
          { 
            path:"neworder/:neworderId",
            element:<NewOrder/>,
          },
          {
            path:"massorder/:massorderId",
            element:<MassOrder />,
          },
          {
            path:"services/:serviceId",
            element:<Services/>,
          },
          {
            path:"orders/:ordersId",
            element:<Orders/>,
          }
        ],
      },
    ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);



