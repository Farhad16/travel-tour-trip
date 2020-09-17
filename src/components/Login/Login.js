import React, { useContext, useState } from 'react';
import './Login.css'
import fb from '../../assets/Icon/fb.png'
import google from '../../assets/Icon/google.png'
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, initializeFramework, signInWithEmailAndPassword } from './LoginManager';


const Login = () => {
    const [message, setMessage] = useState('');
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        photoURL: '',
        error: '',
        success: false
    });
    initializeFramework();

    const [signInUser, setSignInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    // const signOut = () => {
    //     handleSignOut()
    //         .then(res => {
    //             handleResponse(res, false);
    //         })
    // }

    const handleFbSingIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }


    const handleSubmit = (e) => {
        console.log(user);
        console.log(user.email, user.password);
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        e.preventDefault()
    }



    const handleBlur = (e) => {
        let isFieldValid = 'true'
        let pass1;

        if (e.target.name === 'email') {
            const validEmail = /\S+@\S+\.\S+/.test(e.target.value);
            if (validEmail) {
                const msg = '';
                setMessage(msg)
                isFieldValid = validEmail;
            }
            else {
                const msg = 'Username or email is Invalid';
                setMessage(msg)
            }
        }

        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
            pass1 = e.target.value;
            if (pass1 !== user.password) {
                const msg = 'Password is not matched';
                setMessage(msg)
            }
            else {
                const msg = '';
                setMessage(msg)
                isFieldValid = isPasswordValid && passwordHasNumber;
            }
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }


        if (e.target.value === "") {
            const msg = '';
            setMessage(msg)
        }

    }

    const handleResponse = (res, redirect) => {
        setNewUser(res)
        setUser(res);
        setSignInUser(res);
        if (redirect) {
            history.replace(from);
        }
        console.log(res);
    }

    return (
        <div className="signInAndSignUp">
            {
                newUser ?
                    <div className="signUp">
                        <form action="" onSubmit={handleSubmit}>
                            <h5>Create an account</h5>
                            <input type="text" onBlur={handleBlur} name="firstName" placeholder="First Name" required /><br />
                            <input type="text" onBlur={handleBlur} name="lastName" placeholder="Last Name" required /><br />
                            <input type="text" onBlur={handleBlur} name="email" placeholder="Username or Email" required /><br />
                            <input type="password" onBlur={handleBlur} name="password" placeholder="Password" required /><br />
                            <input type="password" onBlur={handleBlur} name="password" placeholder="Confirm Password" required /><br />
                            <br />
                            <p style={{ color: 'red' }}>{message}</p>
                            <input type="submit" className="createAccount" onClick={handleSubmit} value="Create Account" />
                            <p className="note">Already have an account? <span className="colorBrown" onClick={() => { setNewUser(!newUser) }}>Login</span></p>
                        </form>
                    </div> :
                    <div className="signUp">
                        <form action="" onSubmit={handleSubmit}>
                            <h5>Login</h5>
                            <input type="text" onBlur={handleBlur} name="email" placeholder="Username or Email" required /><br />
                            <input type="password" onBlur={handleBlur} name="password" placeholder="Password" required /><br />
                            <p className="sizing">
                                <label htmlFor="">
                                    <input type="checkbox" id="remember" /><span style={{ paddingLeft: '10px' }}>Remember me</span>
                                </label>
                                <span className="colorBrown" >Forget Password?</span>
                            </p><br /> <br />
                            <p style={{ color: 'red' }}>{message}</p>
                            <input type="submit" className="createAccount" onClick={handleSubmit} value="Login" />
                            <p className="note">Don't have an account? <span className="colorBrown" onClick={() => { setNewUser(!newUser) }}>Create an account</span></p>
                        </form>
                    </div>
            }
            <div style={{ marginTop: '20px' }}>
                <label className="line"></label>Or<label className="line"></label>
            </div>
            <div className="alternativeLogin">
                <button onClick={handleFbSingIn}><img src={fb} alt="" /> Continue with Facebook</button><br />
                <button onClick={googleSignIn}><img src={google} alt="" />Continue with Google</button>
            </div>
        </div >
    );
};

export default Login;