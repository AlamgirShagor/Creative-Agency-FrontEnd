import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminHeader from '../AdminHeader/AdminHeader';
import SideBar from '../../Customar/SideBar/SideBar';

const AdminServicList = () => {
    const [AdminServicData, setAdminServicData] = useState([]);
    useEffect(() => {
            fetch('https://peaceful-fortress-15811.herokuapp.com/AdminShowOrder')
          .then(res => res.json())
          .then(data => setAdminServicData(data))
    }, [])
    return (
        <section>
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
            <SideBar></SideBar>
            </div>
            <div className="col-md-10 col-sm-12 col-12">
                <AdminHeader></AdminHeader>
                <div className="col bg-light p-3" style={{height: "90vh"}}>
                    <div className="col-8">
                        <div className="row">
                        <table class="table">
                            <thead class="thead-light">
                                <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Project Details</th>
                                </tr>
                            </thead>
                            {
                                AdminServicData.map( servic => <tbody>
                                    <tr>
                                    <th scope="row">{servic.name}</th>
                                    <td>{servic.email}</td>
                                    <td>{servic.servics}</td>
                                    <td>{servic.message}</td>
                                    </tr>
                                 </tbody> )
                            }
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default AdminServicList;