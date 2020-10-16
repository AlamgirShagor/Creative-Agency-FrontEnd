import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AdminHeader from '../AdminHeader/AdminHeader';
import SideBar from '../../Customar/SideBar/SideBar';

const AddService = () => {

    const[serviceInfo, setServicesInfo] = useState({});
    const[file, setFile] = useState(null);
    const handleBlur = e => {
        const newService ={ ...serviceInfo};
        newService[e.target.name] = e.target.value;
        setServicesInfo(newService)
    }

    const handleFile = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) =>{
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', serviceInfo.name);
        formData.append('description', serviceInfo.description);

        fetch('https://peaceful-fortress-15811.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert("new Services added!!")
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault()
    }
    
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
                    <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="Service">Service Title</label>
                        <input onBlur={handleBlur} type="text" name="name" class="form-control" id="Service" placeholder="Service Title" />
                    </div>
                    <div  class="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea onBlur={handleBlur} class="form-control" id="exampleFormControlTextarea1" placeholder="Description" name="description" rows="5"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlFile1">file input</label>
                        <input onChange={handleFile} type="file" name="icon" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>  
                    
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </section>
        
    );
};

export default AddService;