import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import AboutPage from './pages/AboutPage';
import RootPage from './pages/RootPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";



const router = createBrowserRouter(
  [
    {
      path: "/",
      element:  <RootPage />,
      errorElement: <ErrorPage />,
     
      
      children: 
      [
        {
          path: "about/",
          element: <AboutPage />,
         
        },
        {
          path: "contact/",
          element: <ContactPage />,
        },
  
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
    