import React from "react";
import app_smart_coffee from '../assets/images/app_smart_coffee.png';
import app_aero from '../assets/images/app_aero.png';
import app_brin from '../assets/images/app_brin.png';
import app_karhutla from '../assets/images/app_karhutla.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://smartcoffee.theunra.site/" target="_blank" rel="noreferrer"><img src={app_smart_coffee} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://smartcoffee.theunra.site/" target="_blank" rel="noreferrer"><h2>Smart Coffee Roaster Monitoring App</h2></a>
                <p>Monitoring app for E-Eye, E-Nose, and E-Ear using React, and Flask.</p>
            </div>
            <div className="project">
                <div><img src={app_aero} className="zoom" alt="thumbnail" width="100%"/></div>
                <div><h2>Aeroponik System Monitoring App</h2></div>
                <p>Monitoring app for IoT Aeroponik System using Qt 5.</p>
            </div>
            <div className="project">
                <a href="https://vews-brin.theunra.site/" target="_blank" rel="noreferrer"><img src={app_brin} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://vews-brin.theunra.site/" target="_blank" rel="noreferrer"><h2>Integrated Watershed Monitoring System</h2></a>
                <p>Very Early Warning System Monitoring App for Flood, Landslide, Water Quality, and Air Quality using Next Js, and Node Js Express.</p>
            </div>
            <div className="project">
                <a href="https://saveforest.theunra.site/" target="_blank" rel="noreferrer"><img src={app_karhutla} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://saveforest.theunra.site/" target="_blank" rel="noreferrer"><h2>Saveforest.ai</h2></a>
                <p>UAV tracking and real time data visualization dashboard system using React Js, and Node Js Express.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;