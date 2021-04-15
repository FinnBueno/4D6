import React, { useState } from "react";
import firebase from "firebase/app";
import 'firebase/auth';
import { Box, Flex } from "rebass";
import { LoginForm } from "./form";
import { trackPromise } from "react-promise-tracker";
import { LargeLogo } from "src/atoms/large-logo";
import { LanguageButton } from "src/atoms/lang-button";

export const LoginPage: React.FC<{}> = () => {
    const [loginResult, setLoginResult] = useState<string | undefined>(undefined);
    return (
        <Flex variant='center' alignItems='center'>
            <Box style={{
                position: 'absolute',
                top: 16,
                right: 16,
            }}>
                <LanguageButton size={36} />
            </Box>
            <Flex flexDirection='column' alignItems='center' width='100%' mb={4}>
                <LargeLogo />
            </Flex>
            <LoginForm loginResult={loginResult} onSubmit={({ email, password }) => {
                trackPromise(
                    firebase.auth().signInWithEmailAndPassword(email, password),
                    'sign-in'
                ).catch(error => setLoginResult(error.code))
            }} />
        </Flex>
    );
};