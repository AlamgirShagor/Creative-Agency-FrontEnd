import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import logo from '../../images/logos/logo.png'
import { UserContext } from '../../App';
const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          console.log(result)
          const { displayName, email, photoURL } = result.user;
          const signedInUser = { name: displayName, email , photoURL}
          setLoggedInUser(signedInUser);
          storeAuthToken();
        }).catch(function (error) {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }
    
      const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function (error) {
            // Handle error
          });
      }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mx-auto mt-5 text-center ">
                    <img className="logo" src={logo} alt=""/>
                    <div className="card login p-5">
                        <h4 className="mb-3 mt-5">Login with</h4>
                        <button className="btn  login-btn mb-2 " onClick={handleGoogleSignIn} >Continue with Google</button>
                        <small>Do not have an account? <Link>Create an account</Link></small>
                    </div>
                </div>    
            </div>            
        </div>
    );
};

export default Login;