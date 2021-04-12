import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // TODO: Add values from .env file here
};

export const initialize = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}