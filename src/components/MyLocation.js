import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function MyComponent() {
    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <>
                    <Marker
                        position={center}
                    />
                </>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyComponent)