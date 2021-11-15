import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
// import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)));
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>

                <Typography sx={{ fontWeight: 400, m: 2 }} variant="h6" color="text.secondary">
                    Our Services
                </Typography>

                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h4" >
                    We provided
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service =>
                            <Service
                                key={service.id}
                                service={service}
                            ></Service>
                        )
                    }
                </Grid></Container>
        </Box>
    );
};

export default Services;