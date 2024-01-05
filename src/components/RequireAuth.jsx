import { useLocation, Navigate, Outlet, useParams } from "react-router-dom";
import UserHelper from "../util/UserHelper";

export default function RequireAuth({allowedRoles=[], isUseridInRouteParam ,children})
{
   
    const user = UserHelper.getUserFromToken();
    const isTokenExpired = UserHelper.isTokenExpired();
    const {userId} = useParams();  
    
    console.log("requireAuth user", user);
    console.log(allowedRoles);
    

    if(isUseridInRouteParam == true)
    {
        if(user!=null && isTokenExpired==false)
        {
            if(allowedRoles.includes(user.role) && userId ==user.userId)
            {
               return <>{children}</>
            }
            else
            {
             return <Navigate to = "/unAuthorised"/>
            }
        }
        else
        {
            return <Navigate to = "/login"/>
        }
    }
    else if(isUseridInRouteParam == false)
    {
        if(user!=null && isTokenExpired==false)
        {
            if(allowedRoles.includes(user.role))
            {
               return <>{children}</>
            }
            else
            {
             return <Navigate to = "/unAuthorised"/>
            }
        }
        else
        {
            return <Navigate to = "/login"/>
        }
    }


    // if(user!=null && allowedRoles.includes(user.role) && isTokenExpired==false)
    // {
    //     return <>{children}</>
    // }
    // else if (user!=null && !allowedRoles.includes(user.role) && isTokenExpired==false)
    // {
        
    //     return <Navigate to = "/unAuthorised"/>
    // }
    // else if (user==null || isTokenExpired == true)
    // {
    //     return <Navigate to = "/login"/>

    // }



}