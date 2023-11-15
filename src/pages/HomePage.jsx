
import { useState } from "react";
import AppPaginataion from "../components/AppPagination";
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Container } from "@mui/system";



export default function HomePage()
{

    const [properties, setProperties] = useState([]);

    const renderProperties = properties.map((property) => (
        <Grid item xs={12} sm={6} md={4} key={property.propertyId}>
            <Card>
                <CardMedia
                    component="img"
                    alt={property.name}
                    height="200"
                    image={property.photos.img1}
                    title={property.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {property.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {property.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Price: ${property.priceForNight} per night
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    ));
    
    return (
        <Container>
            <Grid container spacing={3}>
                {renderProperties}
            </Grid>
            <br />
            <AppPaginataion setProperties={(p) => setProperties(p)} />
        </Container>
    );

}