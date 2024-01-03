import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import UserHelper from '../util/UserHelper';
import { useLocation, useParams } from 'react-router-dom';
import Input from '@mui/material/Input';
import UserAPI from '../APIs/BookingSiteAPI/UserAPI';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function EditProfilePage()
{
  const user = UserHelper.getUserFromToken();
  const {userId} = useParams();                    //route parameter userId
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  const initialBio = state?.bio ?? '';
  const initialEmail = state?.email ?? '';
  const initialPhoneNumber = state?.phoneNumber ?? '';
  const initialProfilePic = state?.profilePic ?? '';


  const [bio, setBio] = useState(initialBio);
  const [email, setEmail] = useState(initialEmail);
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const [profilePicDisplay, setProfilePicDisplay] = useState(initialProfilePic); // profile url 
  const [profilePicFile, setProfilePicFile] = useState(null);

  const handleSave = () => {
    // Handle saving the updated profile details
    console.log('Updated Bio:', bio);
    console.log('Updated Email:', email);
    console.log('Updated Phone Number:', phoneNumber);
    console.log('updated profile pic', profilePicFile);
    //data validation
    



    // Make API call to update the profile with the new details
    
    

    UserAPI.updateUserById(userId, phoneNumber, email, bio, profilePicFile)
    .then((response)=>
    {
      if(response.status ==201)
      {
        console.log("Profile updated successfully");
        navigate(`/profile/${user.userId}`)

      }
      else if(response.status ==400)
      {
        console.log("invalid input");
        console.log(response);
      }
      else 
      {
        console.log("Failed to update profile");
      }
    })
    .catch((error)=>
    {
      console.log(error.message);
    });



  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.includes('image'))
    {
      const imageUrl = URL.createObjectURL(selectedFile);
      setProfilePicDisplay(imageUrl);
      setProfilePicFile(selectedFile);
    }
    if(selectedFile ==null)
    {
      setProfilePicDisplay(initialProfilePic);
      setProfilePicFile(null);
    }

  
  };





  

  if(user.userId ==userId)
  {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Edit Profile</Typography>
        </Grid>
        <Grid item xs={12}>
          <Avatar alt="Profile Picture" src={profilePicDisplay} sx={{ width: 100, height: 100 }} />
          <input 
          type="file" 
          accept="image/png, image/jpeg"
          onChange={handleFileChange} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="tel"
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Grid>
      </Grid>
    );
  }
  else 
  {
    return(
      <>
      <p>cannot access</p>
      </>
    )
  }


  
    
    
}