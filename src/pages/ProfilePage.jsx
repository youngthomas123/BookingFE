import UserHelper from "../util/UserHelper"
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import UserAPI from "../APIs/BookingSiteAPI/UserAPI";

export default function ProfilePage()
{
    
    const user = UserHelper.getUserFromToken();
    const {userId} = useParams();                    //route parameter userId
    console.log("user.userId", user.userId);
    console.log("Param id", userId);

    useEffect(()=>
    {
        UserAPI.getUserById(userId)                      //route parameter userId
        .then((response)=>
        {
            if(response.ok)
            {
                //get data json
                //store data in state
                 response.json()
                .then((data)=>console.log(data))
            }
            else if (response.status ==401)
            {
                
                console.log("401");
            }
            else if (response.status ==403)
            {
                
                console.log("403");
            }

        })
        .catch((error)=>
        {
            console.log("Error from API in profile page in catch: " + error);

        });

    },[])

    if(userId ==user.userId)
    {
          //need to only show page if token userid == route param userid
          //In the backend check received token userid == route param userid

        
        return (
          
            <>
            <p>This is the profile page</p>
            </>
            
        )

    }
    else
    {
        return(
            <>
            <p>Cannot access </p>
            </>
        )
    }
   
}