import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import AboutPage from './pages/AboutPage';
import RootPage from './pages/RootPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import IndexPage from "./pages/IndexPage";
import PropertyPage from "./pages/PropertyPage";



const router = createBrowserRouter(
  [
    {
      path: "/",
      element:  <RootPage />,
      errorElement: <ErrorPage />,

     
      
      children: 
      [
        { index: true,
          element: <IndexPage />
        },
         
        {
          path: "about/",
          element: <AboutPage />,
         
        },
        {
          path: "contact/",
          element: <ContactPage />,
        },
        {
          path: "home/",
          element:<HomePage/>

        },
        {
          path: "property/:propertyId",
          element:<PropertyPage/>
        }
  
      ],
    },
    {
      path: "login/",
      element: <LoginPage />,
    },
    {
      path : "signup/",
      element : <SignUpPage/>
    },
   
    
  ]);



export default function App() 
{
    return(
        <>
        <RouterProvider router={router} />
        </>
    );
}
    