import React from 'react';
import { useForm } from "react-hook-form";
import AdminHeader from '../AdminHeader/AdminHeader';
import SideBar from '../../Customar/SideBar/SideBar';

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('https://peaceful-fortress-15811.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json(
            alert("This  Email ownar now  admin!!")
          ))
        
        
    };
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
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded p-4">
                        <span>Add Admin</span>
                        <input className="form-control mt-3" placeholder="Email"  name="email" type="email" ref={register({ required: true })} />
                        {errors.name && <span>This field is required</span>}    
                        <input type="submit" className="btn btn-success mt-3" value="Seubmit" />
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default AddService;