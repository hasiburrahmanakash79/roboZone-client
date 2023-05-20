import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Home/Home/Home";
import PageNotFound from "../../PageNotFound/PageNotFound";
import Login from "../../Login/Login/Login";
import SignUp from "../../Login/SignUp/SignUp";
import AboutItems from "../../About/AboutItems/AboutItems";
import AddToys from "../../AddToys/AddToys";
import Blogs from "../../Blogs/Blogs";
import AllToys from "../../AllToys/AllToys";
import MyToys from "../../MyToys/MyToys";
import ToyDetails from "../../ToyDetails/ToyDetails";
import PrivateRoute from "../PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/addToy",
          element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
          path: "/blog",
          element: <Blogs></Blogs>
        },
        {
        path: "/allToy",
        element: <AllToys></AllToys>
        },
        {
          path: '/myToy',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: '/toyDetail/:id',
          element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://robot-world-server.vercel.app/singleToy/${params.id}`)
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