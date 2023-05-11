import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Portfolios from "../Pages/Portfolio/Portfolios";
import Aboutme from "../Pages/AboutMe/Aboutme";
import ContactMe from "../Pages/ContactMe/ContactMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/services", element: <Services /> },
      { path: "/portfolio", element: <Portfolios /> },
      { path: "/aboutme", element: <Aboutme /> },
      { path: "/contactme", element: <ContactMe /> },
    ],
  },
]);
