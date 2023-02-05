import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../containers/AboutUs";
import Home from "../containers/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "aboutUs",
          element: <AboutUs />,
        },
      ],
    },

    
    {
      path: "aboutUs/",
      element: <AboutUs />,
    },
  ]);