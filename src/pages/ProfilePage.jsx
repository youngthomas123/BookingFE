import UserHelper from "../util/UserHelper"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import UserAPI from "../APIs/BookingSiteAPI/UserAPI";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Divider } from "@mui/material";
import Button from '@mui/material/Button';


export default function ProfilePage()
{
    const[profile, setProfile] = useState({
        username: 'Default Username',
        bio: 'Default bio',
        email: 'Default email',
        phoneNumber: 'Default number',
        accountType: 'Default account type',
        dateCreated: 'Default date created', 
        profilePic: 'http://localhost:3000/Images/ProfilePlaceHolder',
    });
    
    const navigate = useNavigate();
    
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
                .then((data)=>{
                  if(data.profilePicUrl!=null)
                  {
                    setProfile({
                      ...profile,
                      username : data.username,
                      bio : data.bio,
                      email : data.email,
                      phoneNumber : data.phoneNumber,
                      accountType : data.type,
                      dateCreated : data.dateCreated,
                      profilePic : data.profilePicUrl
                      
                    });  
                    
                  }
                  else
                  {
                    setProfile({
                      ...profile,
                      username : data.username,
                      bio : data.bio,
                      email : data.email,
                      phoneNumber : data.phoneNumber,
                      accountType : data.type,
                      dateCreated : data.dateCreated,
                      
                      
                    });
                    

                  }
                  
                    
                })
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

    },[]);

    const handleEditProfile = () => 
    {
        navigate(`/editprofile/${user.userId}`,{
          state :{
            bio : profile.bio,
            email : profile.email,
            phoneNumber : profile.phoneNumber,
            profilePic : profile.profilePic
          }
        });

        console.log('Edit Profile clicked');
    };

    if(userId ==user.userId)
    {
          //need to only show page if token userid == route param userid
          //In the backend check received token userid == route param userid

          return (
            <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} sm={4} md={3}>
                  <Avatar alt="Profile Picture" src={profile.profilePic} sx={{ width: 150, height: 150 }} />
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Typography variant="h5">{profile.username}</Typography>
                  <Typography variant="body1" style={{ marginTop: '10px', marginBottom: '15px' }}>
                    {profile.bio}
                  </Typography>
                  <Divider />
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={4}>
                      <Typography variant="body2">
                        <strong>Email:</strong>
                      </Typography>
                      <Typography variant="body2">{profile.email}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Typography variant="body2">
                        <strong>Phone Number:</strong>
                      </Typography>
                      <Typography variant="body2">{profile.phoneNumber}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Typography variant="body2">
                        <strong>Account Type:</strong>
                      </Typography>
                      <Typography variant="body2">{profile.accountType}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Typography variant="body2">
                        <strong>Date Created:</strong>
                      </Typography>
                      <Typography variant="body2">{profile.dateCreated}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
        
              {/* Edit button */}
              <Grid container justifyContent="flex-end" style={{ marginTop: '20px' }}>
                <Button variant="contained" onClick={handleEditProfile}>
                  Edit Profile
                </Button>
              </Grid>
            </Paper>
          );
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