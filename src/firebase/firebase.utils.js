import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDVS22f8Eb16aRImjYwH4bDVSTbb91FAwM",
    authDomain: "pizza-data-b8661.firebaseapp.com",
    databaseURL: "https://pizza-data-b8661.firebaseio.com",
    projectId: "pizza-data-b8661",
    storageBucket: "pizza-data-b8661.appspot.com",
    messagingSenderId: "866635169256",
    appId: "1:866635169256:web:783be2388237a52765385d"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();


    if(!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;