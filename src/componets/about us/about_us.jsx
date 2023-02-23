import React from "react";
import '../about us/about_us.css'

function About_us() {
    return(
        <div className="section_About_us_grid">
            <div className="section_About_us_grid_1">
                <p className="section_About_us_grid_p1">Nosotros</p>
                <p className="section_About_us_grid_p1">Somos una empresa encargada de dar la <br /> 
                   experiencia romantica y hermosa de <br />
                   conectar a las parejas en todo su esplendor <br /><br />
                   Podras realizar la reservacion de la habitacion de tus sueños
                </p>
                <br />
                <button className="section_About_us_grid_1_button" type="submit">Ver mas</button>
                
            </div>
            

            <div className="section_About_us_grid_2">
                <img src="/image/about_us_image.png" alt="imagen de referencia" />
            </div>
        </div>
    );
}

export default About_us;