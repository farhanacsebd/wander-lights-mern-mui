import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Booking.css'
import { Container } from '@mui/material';


const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();



    useEffect(() => {
        fetch(`https://cryptic-castle-00111.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])



    const onSubmit = data => {
        console.log(data);
        if (!data.address) {
            data.address = service?.address;
        }

        const status = "Pending";
        const bookingItem = { ...data, status };

        axios.post('https://cryptic-castle-00111.herokuapp.com/buyer', bookingItem)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Are you like to added this product?');
                    reset();
                }
            })

    }


    return (
        <Container>

            <Box sx={{ flexGrow: 1, mt: 3, mb: 7 }}>
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={5}>
                        <div>
                            <img style={{ height: 200, width: "50%" }} src={service.img} alt="" />
                            <h3>{service.name}</h3>
                            <p>{service.description}</p>
                            <h5>Price: {service.price}</h5>
                        </div>
                    </Grid>
                    <Grid item xs={4} sm={4} md={6}>


                        <div className="add-order">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input {...register("name", { required: true, maxLength: 120 })} defaultValue={user.displayName} />
                                <input {...register("email", { required: true, maxLength: 120 })} defaultValue={user.email} />
                                <input {...register("productName", { required: true, maxLength: 150 })} defaultValue={service?.name} />
                                <input {...register("price", { required: true, maxLength: 150 })} defaultValue={service?.price} />
                                <textarea {...register("address", { required: true, maxLength: 150 })} placeholder="Address" />
                                <input type="date" {...register("date")} placeholder="Date" />
                                <input type="number" {...register("contact-number")} placeholder="Contact-Number" />

                                <input class="BUTTON-Booking" type="submit" />
                            </form>
                        </div>







                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Booking;