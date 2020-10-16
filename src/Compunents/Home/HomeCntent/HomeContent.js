import React from 'react';
import HomeImage from '../../../images/logos/Frame.png'

const HomeContent = () => {
    return (
        <div className="container">
            <div className=" my-5 pb-5">
                <div className="mb-5 row d-flex align-items-center">
                <div className="col-md-6 col-12">
                    <h1>Let’s Grow Your <br/> Brand To The <br/> Next Level</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className="btn btn-dark">Hire Us</button>
                </div>
                <div className="col-md-6 col-12">
                    <img src={HomeImage} className="img-fluid" alt=""/>
                </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;