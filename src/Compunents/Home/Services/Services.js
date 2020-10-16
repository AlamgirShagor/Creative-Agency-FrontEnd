import React, { useEffect, useState } from 'react';
import './Services.css'
import web from '../../../images/icons/service1.png'
import Graphic from '../../../images/icons/service2.png'
import development from '../../../images/icons/service3.png'
import { Link } from 'react-router-dom';

const Services = () => {
    const [ServicesD, setServicesD] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-fortress-15811.herokuapp.com/getService')
        .then(res => res.json())
        .then(data => setServicesD(data));
    }, [])
    return (
        <section className="container">
            <div className="row my-5 justify-content-center">
            <h2>Provide awesome <span>services</span></h2>
            </div>
            <div className="row justify-content-center my-5">
            
            {
               ServicesD.map( data => <div className="col-md-4 col-sm-6 col-12   d-flex justify-content-center align-content-center m-auto">
                    <Link to="/customarDisplay" className="nav-link text-dark">
                        <div className="card services m-2 text-center p-4">
                            <img className="servicesImg m-2 px-2 m-auto" src={`data:image/jpeg;base64,${data.image.img}`} />
                            <h3>{data.name}</h3>
                            <small>{data.description}</small>
                        </div>
                    </Link>
               </div> )
            }
            </div>
        </section>
    );
};

export default Services;