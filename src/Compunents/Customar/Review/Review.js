import React, { useContext, useState } from 'react';
import Header from '../../Customar/Header/Header';
import SideBar from '../SideBar/SideBar';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const Review = () => {
    const [loggedInUser] = useContext(UserContext);
    const newFile = loggedInUser.photoURL;
    console.log(newFile)
    const[reviewInfo, setReviewInfo] = useState({});
    const[file, setFile] = useState('');
    const handleBlur = e => {
        const newReview ={ ...reviewInfo};
        newReview[e.target.name] = e.target.value;
        setReviewInfo(newReview)
        setFile(newFile);
    }

    // const handleFile = (e) => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // }

    const handleSubmit = (e) =>{
        
        
        const formData = new FormData()
        formData.append('img', file);
        formData.append('name', reviewInfo.name);
        formData.append('designation', reviewInfo.designation);
        formData.append('message', reviewInfo.message);

        fetch('https://peaceful-fortress-15811.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert("Review added!!")
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault()
    }
    // const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = (data) => {
    //     console.log(data);
    //     fetch('https://peaceful-fortress-15811.herokuapp.com/addReview', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //       })
    //       .then(res => res.json(
    //         alert("Add new review!!")
    //         ))
        
    // };
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

                    <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <input onBlur={handleBlur} type="text" name="name" class="form-control"  placeholder="Your name" />
                    </div>
                    <div class="form-group">
                        <input onBlur={handleBlur} class="form-control" placeholder="Company's name Designation " name="designation" type="text" />
                    </div>
                    <div  class="form-group">
                    <textarea onBlur={handleBlur} className="form-control mt-3" rows="7" placeholder="Descripton" name="message" ></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-success">Submit</button>  
                    
                    </form>
                    {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control mt-3" placeholder="Your name" name="name" type="text" ref={register({ required: true })} />                       
                        <input className="form-control mt-3" placeholder="Company's name Designation " name="designation" type="text" ref={register} />                                            
                        <textarea className="form-control mt-3" rows="7" placeholder="Descripton" name="message" ref={register} ></textarea>    
                        <input type="submit" className="btn btn-dark mt-3" value="Submit" />
                    </form> */}
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Review;