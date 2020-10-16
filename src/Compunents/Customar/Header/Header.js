import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const Header = () => {
    const [loggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div className="col-md-12 p-3 d-flex">
            <h6>Order</h6>
            <h6 className="ml-auto">{loggedInUser.name}</h6>
        </div>
    );
};

export default Header;