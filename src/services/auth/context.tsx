import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase";
import { Flex, Heading } from "rebass";
import { SyncLoader } from 'react-spinners';

type AuthState = firebase.User | object | null;

type Auth = ({
    startLoading: () => void;
    loading: boolean;
    isLoggedIn: boolean;
    error?: boolean;
} & AuthState) | null;

export const AuthContext = React.createContext<Auth>({ loading: true, isLoggedIn: false, startLoading: () => {} });

export const AuthProvider: React.FC<{}> = (props) => {

    const [auth, setAuth] = useState<AuthState>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const authStateChanged = (user: firebase.User | null) => {
        setLoading(false);
        if (!user) {
            setAuth(null);
            return;
        }

        setAuth(user);
        // TODO: Fetch user's data from Firebase functions
    };

    useEffect(() => firebase.app().auth().onAuthStateChanged(authStateChanged, _ => setError(true)), []);

    return (
        <AuthContext.Provider
            value={{
                startLoading: () => {
                    if (!auth && !error) { 
                        setLoading(true);
                    }
                },
                loading,
                error,
                isLoggedIn: !!auth,
                ...(auth || {}),
            }}
        >
            {loading ? <LoadingPage /> : (
                error ? <ErrorPage /> : props.children
            )}
        </AuthContext.Provider>
    );
}

const ErrorPage: React.FC<{}> = () => (
    <Heading variant='heading1'>Natural 1!</Heading>
);

const LoadingPage: React.FC<{}> = () => (
    <Flex style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginTop: -40 / 2,
        marginLeft: -108 / 2,
    }} justifyContent='center' alignItems='center'>
        <SyncLoader size={32} loading show />
    </Flex>
);

export const useAuth = () => useContext(AuthContext);
