import React, { useEffect, useState } from 'react';
import Nash from '../../../images/customer-1.png'
import Miriam from '../../../images/customer-2.png'
import Bria from '../../../images/customer-3.png'
import './ClientFeedback.css'


const ClientFeedback = () => {
    const [feedback, setFeedback] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-fortress-15811.herokuapp.com/getFeedback')
        .then(res => res.json())
        .then(data => setFeedback(data));
    }, [])
    return (
        <section className="container">
            <div className="row my-5 justify-content-center">
            <h2>Clients <span>Feedback</span></h2>
            </div>
            <div className="row justify-content-center my-5">
            {
               feedback.map( feedBackData => <div className="col-md-4 col-sm-6 col-12   d-flex justify-content-center align-content-center m-auto">
                    <div className="card clientCard m-2 text-center p-4">
                        <div className="d-flex  text-left mb-1">
                            <img className="clientImg mr-2" src={feedBackData.img}></img>
                            <div className="mt-2">
                                <h3>{feedBackData.name}</h3>
                                <small>{feedBackData.designation}</small>
                            </div>
                        </div>
                        <small>{feedBackData.message}</small>
                    </div>
               </div> )
            }
            </div>
        </section>
    );
};

export default ClientFeedback;