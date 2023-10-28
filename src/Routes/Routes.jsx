import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import CheckOut from "../pages/checkout/CheckOut";
import CheckOuts from "../pages/checkOuts/CheckOuts";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/signup",
            element: <SignUp></SignUp>
        },
        {
            path:"/checkout/:id",
            element: <CheckOut></CheckOut>,
            loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:"/checkouts",
            element: <PrivateRoutes><CheckOuts></CheckOuts></PrivateRoutes>,
        },
      ]
    },
  ]);

  export default router;