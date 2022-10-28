import React from 'react';
import { DirectionsRenderer, GoogleMap, LoadScript, DirectionsService } from '@react-google-maps/api';
import { useState } from 'react';

const Direction = ({origin, destination}) => {
    const [response, setResponse] = useState(null)
    
    // const origin = {'mirpur 10 circle dhaka'}
    // const destination = 'gulshan 1 circle dhaka'

    const directionsCallback = (res) => {
        console.log(res)

        if (res !== null) {
            if (res.status === 'OK') {
               setResponse(res)

            } else {
                console.log('response: ', res)
            }
        }
    }


    return (
        <div>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_API_KEY}
            >
                <GoogleMap
                    // required
                    id='direction-example'
                    // required
                    mapContainerStyle={{
                        height: '100vh',
                        width: '100vw'
                    }}
                    // required
                    zoom={16}
                    // required
                    center={{
                        lat: 0,
                        lng: -180
                    }}

                >
                    {
                        (
                            destination !== '' &&
                            origin !== ''
                        ) && (
                            <DirectionsService
                                // required
                                options={{
                                    destination: destination,
                                    origin: origin,
                                    travelMode: 'Driving'
                                }}
                                // required
                                callback={directionsCallback}

                            />
                        )
                    }

                    {
                        response !== null && (
                            <DirectionsRenderer
                                // required
                                options={{
                                    directions: response
                                }}
                               
                            />
                        )
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Direction;