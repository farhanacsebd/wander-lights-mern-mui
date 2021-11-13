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
        <div id="services">
            <h2 className="text-primary mt-5">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <AllService
                        key={service.id}
                        service={service}
                    ></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;