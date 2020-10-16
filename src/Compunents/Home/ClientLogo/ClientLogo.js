import React from 'react';
import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png'
import uber from '../../../images/logos/uber.png'
import './ClientLogo.css'

    const ClientLogoImg = [
        {
            image : airbnb
        },
        {
            image : google
        },
        {
            image : netflix
        },
        {
            image : slack
        },
        {
            image : uber
        }

    ];
const ClientLogo = () => {
    return (
        <section className="container">
            <div className="row justify-content-center">
            {
               ClientLogoImg.map( logo => <div className="col-md-2 col-sm-6 col-12  d-flex justify-content-center align-content-center m-auto">
                    <img className="ClientLogo m-2 px-2" src={logo.image}></img>
               </div> )
            }
            </div>
        </section>
    );
};

export default ClientLogo;