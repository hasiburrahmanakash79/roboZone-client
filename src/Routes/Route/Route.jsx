import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Home/Home/Home";
import PageNotFound from "../../PageNotFound/PageNotFound";
import Login from "../../Login/Login/Login";
import SignUp from "../../Login/SignUp/SignUp";
import AboutItems from "../../About/AboutItems/AboutItems";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/signUp",
        element: <SignUp></SignUp>
    },
    {
        path: "/about",
        element: <AboutItems></AboutItems>
    },
    {
        path: "*",
        element: <PageNotFound></PageNotFound>
    }
  ]);

export default router;