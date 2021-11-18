import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
// import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://cryptic-castle-00111.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)));
    }, [])

    return (
        <Box style={{ marginTop: 90 }} sx={{ flexGrow: 1 }}>
            <h1 >Our Featured Products</h1>

            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        services.map(service => <Grid item xs={4} sm={4} md={4} >
                            <Service key={service.id}
                                service={service}></Service>
                        </Grid>
                        )
                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default Services;