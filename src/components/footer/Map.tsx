"use client";

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useRef } from 'react';

// Convert StaticImageData to URL string
const iconUrl = icon.src;
const shadowUrl = iconShadow.src;
let DefaultIcon = L.icon({
    iconUrl: iconUrl,
    shadowUrl: shadowUrl
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map:React.FC<any> = () => {
    const mapRef = useRef(null);
    const latitude = 40.7363945;
    const longitude = -74.0586581;
    // const locationInfo = {
    //   mapLat:40.7363945,
    //   mapLng:-74.0586581,
    //   mapZoom:12,
    //   addressLine1:"634 Summit ave",
    //   addressLine2: "Jersey City, NJ",
    //   addressCountry:"United States",
    //   addressTitle: "Highrise Construction",
    // }
    return (
        <MapContainer 
            ref={mapRef}
            style={{height: '400px', width: '100%'}} 
            center={[latitude, longitude]}
            zoom={12} 
            scrollWheelZoom={false}
            zoomControl={false}
        >
            <TileLayer
                attribution=''
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                key={"634 Summit ave Jersey City, NJ, United States"}
                position={[latitude, longitude]}
            >
                <Tooltip>Highrise Construction</Tooltip>
            </Marker>
        </MapContainer>
    )
}
// Disable server-side rendering for this component
// Map.ssr = false;
export default Map;