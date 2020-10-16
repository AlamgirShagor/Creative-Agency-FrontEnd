import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const AdminHeader = () => {
    const [loggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div className="col-md-12 p-3 d-flex">
            <h6>Services list</h6>
            <img style={{width: '50px'}} className="ml-auto mr-1 rounded-circle" src={loggedInUser.photoURL} alt=""/>
            <h6 className="ml-auto">{loggedInUser.name}</h6>
        </div>
    );
};

export default AdminHeader;