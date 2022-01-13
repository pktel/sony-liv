import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCQcVRsbru3ntkKqMzhwwfqbKBj6GY4SM4",
    authDomain: "sonyliv-41f18.firebaseapp.com",
    projectId: "sonyliv-41f18",
    storageBucket: "sonyliv-41f18.appspot.com",
    messagingSenderId: "679696414864",
    appId: "1:679696414864:web:d3398b171cdc2d16ff4015",
    // eslint-disable-next-line no-template-curly-in-string
    measurementId: "${config.measurementId}"
};

const app = initializeApp(firebaseConfig);

// eslint-disable-next-line no-unused-vars
const authentication = getAuth(app);

export {authentication};