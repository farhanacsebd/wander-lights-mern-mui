import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;

    return (
        <Card sx={{ maxWidth: 345, boxShadow: 2 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                image={img}
            />
            <Box sx={{ bgcolor: 'text.disabled', color: 'primary.main' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>

                    <Typography variant="p" color="text.secondary" sx={{ color: "black" }}>
                        Price : ₹{price}tk
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/booking/${_id}`}>
                        <Button style={{ textDecoration: "none" }} sx={{ padding: "3px", margin: "5px" }} variant="contained">Buy Now</Button>
                    </Link>


                </CardActions>
            </Box>
        </Card>


    );
};

export default Service;