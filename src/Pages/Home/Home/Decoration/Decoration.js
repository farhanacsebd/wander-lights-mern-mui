import { Container, Grid } from '@mui/material';
import React from 'react';

const Decoration = () => {

    return (
        <Container>
            <Grid container spacing={2}>

                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <img src='https://3.imimg.com/data3/QT/QY/MY-2077487/decorative-lights-500x500.jpg' />
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>

            </Grid>
        </Container >
    );
};

export default Decoration;