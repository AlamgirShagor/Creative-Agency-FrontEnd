import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

const Order = () => {
    const [loggedInUser] = useContext(UserContext);
    const[OrderInfo, setOrderInfo] = useState({});
    const[file, setFile] = useState(null);
    const handleBlur = e => {
        const newOrder ={ ...OrderInfo};
        newOrder[e.target.name] = e.target.value;
        setOrderInfo(newOrder)
    }

    const handleFile = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) =>{
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', OrderInfo.name);
        formData.append('email', OrderInfo.email);
        formData.append('servics', OrderInfo.servics);
        formData.append('message', OrderInfo.message);

        fetch('https://peaceful-fortress-15811.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert("You make a order!!")
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault()
    } 
    return (
        <div className="col bg-light p-3 h-100" style={{height: "90vh"}} >
        <div className="col-8" >
        <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <input onBlur={handleBlur} type="text" value={loggedInUser.name} name="name" class="form-control"   placeholder="Your name/company name" />
                    </div>
                    <div class="form-group">
                        <input onBlur={handleBlur} type="email" value={loggedInUser.email} name="email" class="form-control"   placeholder="Your Email" />
                    </div>
                    <div class="form-group">
                        <input onBlur={handleBlur}  class="form-control"  placeholder="Graphic Design"  name="servics" type="text" />
                    </div>
                    <div  class="form-group">
                        <textarea onBlur={handleBlur} class="form-control" placeholder="Project Details " name="message" rows="5"></textarea>
                    </div>
                    <div class="form-group">
                        <input onChange={handleFile} type="file" name="example" class="form-control-file"/>
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>  
                </form>
        </div>
        </div>
    );
};

export default Order;