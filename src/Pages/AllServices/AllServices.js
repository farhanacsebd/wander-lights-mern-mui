import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AllService from '../AllService/AllService';
import './AllServices.css';

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <h1>Our Featured Products</h1>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        services.map(service => <Grid item xs={4} sm={4} md={4} >
                            <AllService key={service.id}
                                service={service}></AllService>
                        </Grid>
                        )
                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default AllServices;