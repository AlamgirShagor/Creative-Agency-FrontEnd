import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Order from '../Order/Order';
import SideBar from '../SideBar/SideBar';


const CustomarDisplay = () => {
    let { services } = useParams();
    return (
        <section>
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
            <SideBar></SideBar>
            </div>
            <div className="col-md-10 col-sm-12 col-12">
                <Header></Header>
                <Order titel={services}></Order>
            </div>
        </div>
        </section>
    );
};

export default CustomarDisplay;