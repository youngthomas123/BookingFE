import { useLocation, Navigate, Outlet } from "react-router-dom";
import UserHelper from "../util/UserHelper";

export default function RequireAuth({allowedRoles=[], children})
{
   
    const user = UserHelper.getUserFromToken();
    const isTokenExpired = UserHelper.isTokenExpired();

    console.log("requireAuth user", user);
    console.log(allowedRoles);


    if(user!=null && allowedRoles.includes(user.role) && isTokenExpired==false)
    {
        return <>{children}</>
    }
    else if (user!=null && !allowedRoles.includes(user.role) && isTokenExpired==false)
    {
        
        return <Navigate to = "/unAuthorised"/>
    }
    else if (user==null || isTokenExpired == true)
    {
        return <Navigate to = "/login"/>

    }



}