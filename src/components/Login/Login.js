import React, { useContext, useState } from 'react';
import './Login.css'
import fb from '../../assets/Icon/fb.png'
import google from '../../assets/Icon/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [newUser, setNewUser] = useState(true);
    const [signInUser, setSignInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = { name: displayName, email };
                setSignInUser(signedInUser);
                history.replace(from);

            }).catch(error => {
                console.log(error);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFbSingIn = () => {
        firebase.auth().signInWithPopup(fbProvider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = { name: displayName, email };
                setSignInUser(signedInUser);
                history.replace(from);
            }).catch(error => {
                console.log(error);
            });
    }



    return (
        <div className="signInAndSignUp">
            {
                newUser ?
                    <div className="signUp">
                        <form action="" onSubmit={handleSubmit}>
                            <h5>Login</h5>
                            <input type="text" name="userNameOfEmail" placeholder="Username or Email" /><br />
                            <input type="password" name="password" placeholder="Password" /><br />
                            <p className="sizing">
                                <label htmlFor="">
                                    <input type="checkbox" id="remember" /><span style={{ paddingLeft: '10px' }}>Remember me</span>
                                </label>
                                <span className="colorBrown" >Forget Password?</span>
                            </p><br />
                            <button className="createAccount" onClick={handleSubmit}>Create Account</button>
                            <p className="note">Don't have an account? <span className="colorBrown" onClick={() => { setNewUser(!newUser) }}>Create an account</span></p>
                        </form>
                    </div> :
                    <div className="signUp">
                        <form action="" onSubmit={handleSubmit}>
                            <h5>Create an account</h5>
                            <input type="text" name="fristName" placeholder="First Name" /><br />
                            <input type="text" name="lastName" placeholder="Last Name" /><br />
                            <input type="text" name="userNameOfEmail" placeholder="Username or Email" /><br />
                            <input type="password" name="password1" placeholder="Password" /><br />
                            <input type="password" name="password2" placeholder="Confirm Password" /><br />
                            <button className="createAccount" onClick={handleSubmit}>Create Account</button>
                            <p className="note">Already have an account? <span className="colorBrown" onClick={() => { setNewUser(!newUser) }}>Login</span></p>
                        </form>
                    </div>

            }
            <div style={{ marginTop: '20px' }}>
                <label className="line"></label>Or<label className="line"></label>
            </div>
            <div className="alternativeLogin">
                <button onClick={handleFbSingIn}><img src={fb} alt="" /> Continue with Facebook</button><br />
                <button onClick={handleGoogleSignIn}><img src={google} alt="" />Continue with Google</button>
            </div>
        </div >
    );
};

export default Login;