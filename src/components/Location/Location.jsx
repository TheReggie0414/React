import React, { useState, useEffect } from 'react';

export const GeolocationExample = () => {
    const [location, setLocation] = useState({
        country: null,
        error: null,
    });

    useEffect(() => {
        const getLocation = () => {
            fetch('https://ipapi.co/json/')
                .then((response) => response.json())
                .then((data) => {
                    setLocation({
                        country: data.country_name,
                        error: null,
                    });
                })
        };

        getLocation();
    }, []);

    return (
        <div>
            <h2>Знаходження користувача</h2>

            <p>country: {location.country}</p>

        </div>
    );


};

export default GeolocationExample;