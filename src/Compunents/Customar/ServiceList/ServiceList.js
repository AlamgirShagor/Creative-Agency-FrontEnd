import React, { useState, useEffect, useContext } from 'react';
import SideBar from '../SideBar/SideBar';
import Header from '../../Customar/Header/Header';
import { UserContext } from '../../../App';

const ServiceList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [servicData, setServicData] = useState([]);
    useEffect(() => {
            fetch('https://peaceful-fortress-15811.herokuapp.com/showOrder')
          .then(res => res.json())
          .then(data => setServicData(data))
    }, [])
    return (
        <section>
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
            <SideBar></SideBar>
            </div>
            <div className="col-md-10 col-sm-12 col-12">
                <Header></Header>
                <div className="col bg-light p-3" style={{height: "90vh"}}>
                    <div className="col-8">
                        <div className="row">
                            {
                                servicData.map( servic => <div className="card p-3 m-1 col-md-4">
                                    <img className="servicesImg m-2 px-2 mr-auto" src={`data:image/jpeg;base64,${servic.image.img}`} />
                                    <h3>{servic.servics}</h3>
                                    <p>{servic.message}</p>
                                </div> )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default ServiceList;