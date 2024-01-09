import { useState } from 'react';

import { Grid, TextField, Button, Typography, Container, Paper, Box } from '@mui/material';

import PropertyAPI from '../APIs/BookingSiteAPI/PropertyAPI';
import { useNavigate } from 'react-router-dom';


export default function EnlistPropertyPage()
{
  const [mainPhoto, setMainPhoto] = useState('');
  const [otherPhotos, setOtherPhotos] = useState([]);

  const navigate = useNavigate();


  const handleMainPhotoChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.includes('image')) 
    {
      setMainPhoto(file);
    }
    if(file ==null)
    {
      setMainPhoto(null);
    }
  };


  

    const handleOtherPhotosChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    if (file && file.type.includes('image')) 
    {
      const updatedPhotos = [...otherPhotos];
      if (updatedPhotos.length < 6) 
      {
        updatedPhotos.push(file);
        setOtherPhotos(updatedPhotos);
        event.target.value = null; // Reset the input value to clear the selection
      }
    }
  };
  

    const handleRemovePhoto = (index) => {
    const updatedPhotos = [...otherPhotos];
    updatedPhotos.splice(index, 1);
    setOtherPhotos(updatedPhotos);
  };


    const handleEnlistProperty = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const location = data.get('Location');
    const PropertyName = data.get('PropertyName');
    const descripion = data.get('Description');
    const price = data.get('PricePerNight');
    console.log("MainPhoto: ", mainPhoto);
    console.log("OtherPhotos: ", otherPhotos);
    console.log("Property Name: ", PropertyName);
    console.log("Location: ", location);
    console.log("Description: ", descripion);
    console.log("PricePerNight: ", price);


    if (
      mainPhoto !== null &&
      mainPhoto !== '' &&
      otherPhotos.length !== 0 &&
      !isNaN(price) &&
      parseFloat(price) >= 0 &&
      parseFloat(price) <= 1000 &&
      PropertyName.trim() !== '' &&
      descripion.trim() !== '' &&
      location.trim() !== '' &&
      PropertyName.trim().length <= 50 &&
      descripion.trim().length <= 300 &&
      location.trim().length <= 60
  ) 
  {
      console.log("Valid input");
      PropertyAPI.createPropertyEnlisting(PropertyName, descripion, location, price, mainPhoto, otherPhotos)
      .then((response)=>{
        if(response.status ==201)
        {
          console.log("Enlisting created successfully");
          navigate('/landlord');
        }
        else
        {
          console.log("Failed to create enlisting");
          console.log(response);
        }
      })
      .catch((error)=>
      {
        console.log(error);
      })
  } 
  else 
  {
      console.log("Invalid input");
  }
  


    
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '40px' }}>
      <Paper elevation={3} style={{ padding: '30px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Enlist Your Property
        </Typography>
        <form onSubmit={handleEnlistProperty}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Property Name"
                name = "PropertyName"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                fullWidth
                label="Location"
                name='Location'
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                fullWidth
                label="PricePerNight"
                name='PricePerNight'
                variant="outlined"
                
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
                name='Description'
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
             <Typography variant="subtitle1">Main Property Picture</Typography>
               <Box display="flex" alignItems="center">
                  {mainPhoto && (
                    <img
                     src={URL.createObjectURL(mainPhoto)}
                     alt="Main"
                     width="150" // Adjusted width for consistency
                     style={{
                     borderRadius: '5px',
                     marginRight: '20px', // Space between image and button
                    }}
                   />
                 )}
                  <label htmlFor="main-photo-upload">
                    <Button variant="outlined" color="primary" component="span">
                      Upload
                   </Button>
                    </label>
                     <input
                     type="file"
                     accept="image/png, image/jpeg"
                     onChange={handleMainPhotoChange}
                     style={{ display: 'none' }} // Hide the input visually
                     id="main-photo-upload" // Add an ID for label association
                    />
               </Box>
            </Grid>

 
            <Grid item xs={12}>
  <Typography variant="subtitle1">Other Photos (Max 6)</Typography>
  <Box display="flex" flexWrap="wrap">
    {otherPhotos.map((photo, index) => (
      <Box
        key={index}
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={2}
        mr={2}
        style={{
          position: 'relative',
          marginBottom: '12px',
          width: '100px',
          height: '130px',
        }}
      >
        <img
          src={URL.createObjectURL(photo)}
          alt={`Other ${index + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px',
          }}
        />
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={() => handleRemovePhoto(index)}
          style={{
            marginTop: '5px',
            padding: '2px 6px',
            fontSize: '0.75rem',
            opacity: '0.7',
            width: '100%',
          }}
        >
          Remove
        </Button>
      </Box>
    ))}
    {otherPhotos.length < 6 && (
      <Box
      display="flex"
      alignItems="center"
      mb={2}
      mr={2}
      style={{
        borderRadius: '5px',
        padding: '10px',
        position: 'relative',
      }}
    >
      <label htmlFor="other-photo-upload" style={{ marginRight: '20px' }}>
        <Button variant="outlined" color="secondary" component="span">
          Upload
        </Button>
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleOtherPhotosChange}
        style={{ display: 'none' }} // Hide the input visually
        multiple
        id="other-photo-upload" // Add an ID for label association
      />
    </Box>
    )}
  </Box>
</Grid>


            <Grid item xs={12}>
              <Button fullWidth variant="contained" color="primary" type='submit'>
                Enlist Property
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );

  

 
  
  


}












// import { useState } from 'react';
// import { Grid, TextField, Button, Typography, Container, Paper, Box } from '@mui/material';

// export default function EnlistPropertyPage() {
//   const [mainPhoto, setMainPhoto] = useState('');
//   const [otherPhotos, setOtherPhotos] = useState([]);

//   const handleMainPhotoChange = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type.includes('image')) {
//       setMainPhoto(file);
//     }
//   };

//   const handleOtherPhotosChange = (event) => {
//     const file = event.target.files[0]; // Get the first selected file
//     if (file && file.type.includes('image')) {
//       const updatedPhotos = [...otherPhotos];
//       if (updatedPhotos.length < 6) {
//         updatedPhotos.push(file);
//         setOtherPhotos(updatedPhotos);
//         event.target.value = null; // Reset the input value to clear the selection
//       }
//     }
//   };
  
  

//   const handleRemovePhoto = (index) => {
//     const updatedPhotos = [...otherPhotos];
//     updatedPhotos.splice(index, 1);
//     setOtherPhotos(updatedPhotos);
//   };

//   const handleEnlistProperty = () => {
//     // Code to upload 'mainPhoto' and 'otherPhotos' to the server
//     // Example:
//     // const formData = new FormData();
//     // formData.append('mainPhoto', mainPhoto);
//     // otherPhotos.forEach((photo, index) => {
//     //   formData.append(`otherPhoto_${index}`, photo);
//     // });
//     // Make an API request here to upload formData to the server
//   };

//   return (
//     <Container maxWidth="lg" style={{ marginTop: '40px' }}>
//       {/* ... rest of the code */}
//       <form onSubmit={handleEnlistProperty}>
//         {/* ... other input fields */}
//         <Grid item xs={12}>
//           <Typography variant="subtitle1">Other Photos (Max 6)</Typography>
//           <Box display="flex" flexWrap="wrap">
//             {otherPhotos.map((photo, index) => (
//               <Box
//                 key={index}
//                 display="flex"
//                 flexDirection="column"
//                 alignItems="center"
//                 mb={2}
//                 mr={2}
//                 style={{
//                   position: 'relative',
//                   marginBottom: '12px',
//                   width: '100px',
//                   height: '130px',
//                 }}
//               >
//                 <img
//                   src={URL.createObjectURL(photo)}
//                   alt={`Other ${index + 1}`}
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     borderRadius: '5px',
//                   }}
//                 />
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   size="small"
//                   onClick={() => handleRemovePhoto(index)}
//                   style={{
//                     marginTop: '5px',
//                     padding: '2px 6px',
//                     fontSize: '0.75rem',
//                     opacity: '0.7',
//                     width: '100%',
//                   }}
//                 >
//                   Remove
//                 </Button>
//               </Box>
//             ))}
//             {otherPhotos.length < 6 && (
//               <Box
//                 display="flex"
//                 alignItems="center"
//                 mb={2}
//                 mr={2}
//                 style={{
//                   borderRadius: '5px',
//                   border: '2px dashed #aaa',
//                   padding: '10px',
//                   position: 'relative',
//                 }}
//               >
//                 <input type="file" onChange={handleOtherPhotosChange} multiple />
//               </Box>
//             )}
//           </Box>
//         </Grid>
//         <Grid item xs={12}>
//           <Button fullWidth variant="contained" color="primary" type="submit">
//             Enlist Property
//           </Button>
//         </Grid>
//       </form>
//     </Container>
//   );
// }

