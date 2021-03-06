import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Box, Typography } from '@mui/material';
import Rating from 'react-rating';
import './ShowReview.css';

const ShowReview = ({ service }) => {
    console.log(service);
    // const {service} = props;
    const { _id, name, email, description, rating } = service;
    return (
        <Card sx={{ display: 'flex', boxShadow: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {name}
                    </Typography>
                    <Typography component="div" variant="h6">
                        {email}
                    </Typography>
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {description}
                    </Typography>
                </CardContent>

            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHC8OLmXfWf3LjJAB9fCYgK1tTJjg7AOhqg&usqp=CAU"
            />
        </Card>
    );
};

export default ShowReview;