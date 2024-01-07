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
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import EnlistPropertyPage from "./pages/EnlistPropertyPage";
import LandLordPage from "./pages/LandLordPage";
import BookingPage from "./pages/BookingPage";



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

        //protected routes
        {
          path: "home/",
          element:  <RequireAuth allowedRoles={['tenant']} isUseridInRouteParam={false}>
                      <HomePage/>
                    </RequireAuth>

        },
        {
          path: "property/:propertyId",
          element:  <RequireAuth allowedRoles={['tenant']} isUseridInRouteParam={false}>
                      <PropertyPage/>
                    </RequireAuth>
        },

        {
          path : "profile/:userId",
          element : <RequireAuth allowedRoles={['tenant','landlord','admin']} isUseridInRouteParam={true}>
                      <ProfilePage/>
                    </RequireAuth>
        },

        {
          path : "editprofile/:userId",
          element : <RequireAuth allowedRoles={['tenant','landlord','admin']} isUseridInRouteParam={true}>
                      <EditProfilePage/>
                    </RequireAuth>
        },

        {
          path: "admin/",
          element:  <RequireAuth allowedRoles={['admin']} isUseridInRouteParam={false}>
                      <AdminPage/>
                    </RequireAuth>
        },

        {
          path: "enlistProperty/",
          element:  <RequireAuth allowedRoles={['landlord']} isUseridInRouteParam={false}>
                      <EnlistPropertyPage/>
                    </RequireAuth>
        },
        {
          path: "landlord/",
          element:  <RequireAuth allowedRoles={['landlord']} isUseridInRouteParam={false}>
                      <LandLordPage/>
                    </RequireAuth>
        },
        {
          path: "booking/",
          element:  <RequireAuth allowedRoles={['tenant']} isUseridInRouteParam={false}>
                      <BookingPage/>
                    </RequireAuth>
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
