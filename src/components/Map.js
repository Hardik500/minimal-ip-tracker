import { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { divIcon } from 'leaflet'
import { MapContainer as LeafletMap, TileLayer, Marker, useMap } from "react-leaflet";
import { ReactComponent as MarkerIcon } from '../assets/icons/icon-location.svg'

function MyComponent({ position }) {
    const map = useMap();
    map.setView(position, map.getZoom());
    return null
}

export default function Map({ position }) {
    const [width, setWidth] = useState(window.innerWidth);
    
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile = (width <= 768);

    const icon = divIcon({
        className: 'custom-icon',
        html: ReactDOMServer.renderToString(<MarkerIcon/>)
    });

    return (
        <LeafletMap center={position} zoom={17} zoomControl={false}
            whenCreated={map => setInterval(() => { map.invalidateSize() }, 100)}
            style={{ height: isMobile ? "70vh" : "65vh" }}>
            <MyComponent position={position} />
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
            <Marker position={position} icon={icon}/>
        </LeafletMap>
    )
}