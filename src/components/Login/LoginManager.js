import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.configuration";

export const initializeFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(result => {
            const { displayName, photoURL, email } = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photoURL: photoURL,
                success: true
            }
            return signedInUser;
        })
        .catch(err => {
            console.log(err);
        })
}




export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider)
        .then(result => {
            const { displayName, photoURL, email } = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photoURL: photoURL,
                success: true
            }
            return signedInUser;
        }).catch(error => {
            console.log(error);
        });
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photoURL: '',
                error: '',
                success: false
            }
            return signedOutUser;
        })
        .catch(err => {
            console.log(err);
        })
}

export const createUserWithEmailAndPassword = (user) => {
    const { firstName, lastName, email, password } = user;
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            const name = `${firstName} ${lastName}`;
            updateUserName(name);
            return newUserInfo;
        })
        .catch(err => {
            const newUserInfo = {};
            newUserInfo.error = err.message;
            newUserInfo.success = false;
            return newUserInfo;
        })
}

export const signInWithEmailAndPassword = user => {
    const { email, password } = user;
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true
            return newUserInfo;
        })
        .catch(function (error) {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false
            return newUserInfo;
        });
}

const updateUserName = name => {
    console.log(name);
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
    }).then(function () {
        console.log("User name updated successfully");
    }).catch(function (error) {
        console.log(error);
    })
}