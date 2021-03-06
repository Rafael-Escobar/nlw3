import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import mapMarkerImg from "../images/map-marker.svg";
import { Map, TileLayer } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças então esperando a sua visita</p>
                </header>
                <footer>
                    <strong>Foz do Iguaçu</strong>
                    <span>Paraná</span>
                </footer>
            </aside>
            <Map
                center={[-25.485516, -54.55468]}
                zoom={10}
                style={{ width: "100%", height: "100%" }}
            >

                {/* Mapa alternativo: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" */}
                <TileLayer
                    url={
                        `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
                    }
                />
            </Map>

            <Link to="" className='create-orphanage'>
                <FiPlus size={32} color='#FFF' ></FiPlus>
            </Link>
        </div>
    );
}

export default OrphanagesMap;