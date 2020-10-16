import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import './SideaBar.css'
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://peaceful-fortress-15811.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            
            <ul className="list-unstyled">
                <img className="sidebarLogo mb-4 " src={logo} alt=""/>
                <li>
                    <Link to="/CustomarDisplay" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/serviceList" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Services List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Review</span>
                    </Link>
                </li>
                { isAdmin && <div>
                <li>
                    <Link to="/AdminServicList" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Services List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/AddService" className="text-white">
                        <FontAwesomeIcon icon={faCog} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/MakeAdmin" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                </div>}
            </ul>
        </div>
    );
};

export default SideBar;