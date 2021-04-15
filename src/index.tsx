import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import dotenv from 'dotenv';
import firebase from 'firebase/app';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import App from './app';

import 'firebase/auth';

dotenv.config();

firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

firebase.app().functions('europe-west1');

ReactDOM.render(
    <React.StrictMode>
		<Helmet>
			<meta charSet="utf-8" />
			<title>4D6</title>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
        	<link href="https://fonts.googleapis.com/css2?family=MedievalSharp:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:ital@1&display=swap" rel="stylesheet" />
		</Helmet>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
