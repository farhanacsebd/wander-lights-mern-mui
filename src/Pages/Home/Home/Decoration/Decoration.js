import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Decoration.css'
import { Container } from '@mui/material';
const Decoration = () => {

    return (

        <Container>
            <Box sx={{ flexGrow: 1 }} style={{ paddingBottom: 30 }}>
                <h1 style={{ marginTop: 50, marginBottom: 40 }}>Frequently Asked Question</h1>
                <Grid style={{ marginBottom: 150 }} container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={6}>
                        <img style={{ width: "100%", height: "400px" }} src="https://www.india.com/wp-content/uploads/2017/10/diwali-lights.jpg" alt="" />
                    </Grid>
                    <Grid item xs={4} sm={4} md={6}>
                        <h3 class="start">Your peace of mind is our top priority</h3>
                        <p class="start">Perfect for spicing-up your decor or creating a romantic setting.</p>
                        <p class="start">These hanging, string lights or led wire lights make a great holiday decoration or perfect for Festival, Christmas, Wedding, Holiday and Party.</p>
                        <p class="start">Blossom lights comes with multiple variations.</p>
                        <p class="start">Can application Widely Used In Home Decoration, Outdoor And Indoor Project, Hotel, Office Building, Shopping Mall, Store, Pop, False Ceiling, Hotel & Restaurant ,Diwali Decoration.</p>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Decoration;