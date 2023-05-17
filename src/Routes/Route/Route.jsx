import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Home/Home/Home";
import PageNotFound from "../../PageNotFound/PageNotFound";


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
        path: "*",
        element: <PageNotFound></PageNotFound>
    }
  ]);

export default router;