import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/data';
import { Link } from 'react-router-dom';

function ServicesSection() {
    const { authURL } = useAuth(); // This is still available if needed for any other purpose.
    const [services, setServices] = useState([]);

    // Fetch services data from localStorage when the component mounts
    useEffect(() => {
        // Retrieve data from localStorage
        const storedData = localStorage.getItem('psLinks');

        if (storedData) {
            try {
                const data = JSON.parse(storedData);

                // Filter the services to include only those with categoryName = 'consulting-services'
                const filteredServices = data.filter(service => service.categoryName === 'consulting-services');

                setServices(filteredServices); // Set the filtered services
            } catch (error) {
                console.error('Error parsing services data from localStorage:', error);
            }
        } else {
            console.log('No data found in localStorage.');
        }
    }, []); // Empty dependency array to run the effect only once after the component mounts

    return (
        <div className="h-full px-4 sm:px-6 md:px-12 lg:px-24">
            <div className='inner-tilted-div w-full'>
                <div className="w-full py-6 sm:py-8">
                    <div className="flex flex-col items-center justify-between w-full space-y-4">
                        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center text-slate-800 whitespace-nowrap">
                            Services we Provide
                        </h1>

                        {/* Grid Layout for Services */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {services.map((service, index) => (
                                <Link to={`/${service.linkURL}`} key={service.id} className='px-6 py-4 flex flex-col h-full'>
                                    <div className='text-2xl font-bold text-slate-600'>
                                        <span className="font-bold">{index + 1}. </span>{service.linkName}
                                    </div>
                                    <div className='w-full pt-2'>
                                        <p className='text-md sm:text-md text-gray-700 text-justify'>
                                            {service.overview}
                                        </p>
                                    </div>

                                    {/* Service Image (at the bottom of the card) */}
                                    <div className='h-auto mt-auto'>
                                        <img
                                            src={service.image}  // Directly use the base64 image data
                                            alt={service.linkName}
                                            className='w-full h-auto'
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;
