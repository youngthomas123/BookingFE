import { useLocation, Navigate, Outlet } from "react-router-dom";
import UserHelper from "../util/UserHelper";

export default function RequireAuth({allowedRole, children})
{
    const user = UserHelper.getUserFromToken();
    const isTokenExpired = UserHelper.isTokenExpired();

    console.log("requireAuth user", user);


    if(user!=null && user.role ==allowedRole && isTokenExpired==false)
    {
        return <>{children}</>
    }
    else if (user!=null && user.role !==allowedRole && isTokenExpired==false)
    {
        
        return <Navigate to = "/unAuthorised"/>
    }
    else if (user==null || isTokenExpired == true)
    {
        return <Navigate to = "/login"/>

    }



}