import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PropertyPage from "./pages/PropertyPage";
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AdminPage from "./pages/AdminPage";
import RequireAuth from "./components/RequireAuth";
import UnAuthorisedPage from "./pages/UnAuthorisedPage";



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
          path: "unAuthorised/",
          element: < UnAuthorisedPage/>,
        },
         
        {
          path: "about/",
          element: <AboutPage />,
         
        },
        {
          path: "contact/",
          element: <ContactPage />,
        },
        //protected tenant routes
        {
          path: "home/",
          element:  <RequireAuth allowedRole={"tenant"}>
                      <HomePage/>
                    </RequireAuth>

        },
        {
          path: "property/:propertyId",
          element:  <RequireAuth allowedRole={"tenant"}>
                      <PropertyPage/>
                    </RequireAuth>
        },
        //protected landlord routes 

        //protected admin routes 
        {
          path: "admin/",
          element:  <RequireAuth allowedRole={"admin"}>
                      <AdminPage/>
                    </RequireAuth>
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
    