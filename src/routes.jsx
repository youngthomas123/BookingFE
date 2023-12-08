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


const publicRoutes =
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
        ]
    },
    {
      path: "login/",
      element: <LoginPage />,
    },
    {
      path : "signup/",
      element : <SignUpPage/>
    },

];
  


const privateRoutesTenants = 
[
    {
      path: "home/",
      element:<HomePage/>
  
    },
    {
      path: "property/:propertyId",
      element:<PropertyPage/>
    },
];
  

const privateRoutesLandlord = 
[
  
];
  

const privateRoutesAdmin = 
[
  {
    path: "admin/",
    element:<AdminPage/>

  },
]

export {publicRoutes, privateRoutesLandlord, privateRoutesTenants, privateRoutesAdmin}