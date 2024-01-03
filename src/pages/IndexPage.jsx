import { Container, Typography, Paper } from '@mui/material';

export default function IndexPage()
{
    return (
        <Container maxWidth="md" sx={{ textAlign: 'center', paddingTop: '100px' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Booking Site
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Book properties for short stay or rent your property to tenants.
          </Typography>
          <Paper
            elevation={3}
            sx={{
              marginTop: '40px',
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
            }}
          >
            <img
              src="http://localhost:3000/Images/FrontPageImage" 
              alt="Landing Page"
              style={{ width: '100%', maxWidth: '100%', borderRadius: '10px' }}
            />
          </Paper>
        </Container>
      );
    

}