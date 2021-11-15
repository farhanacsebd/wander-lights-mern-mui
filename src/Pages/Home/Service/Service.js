import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
// import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;

    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ maxWidth: 345, border: 0, boxShadow: 0 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: "140", margin: "0 auto" }}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Link to={`/booking/${_id}`}>
                            <Button sx={{ padding: "3px", margin: "5px" }} variant="contained">Book {name.toLowerCase()}</Button>

                        </Link>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Service;