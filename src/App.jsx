import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import AboutPage from './pages/AboutPage';
import RootPage from './pages/RootPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter([
    {
      path: "/",
      element:  <RootPage />,
      errorElement: <ErrorPage />,
     
      
      children: [
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
    
  ]);



export default function App() 
{
    return(
        <>
        <RouterProvider router={router} />
        </>
    );
}
    