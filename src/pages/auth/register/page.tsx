import React, { useState } from "react";
import firebase from "firebase/app";
import 'firebase/auth';
import { Box, Flex, Heading } from "rebass";
import { trackPromise } from 'react-promise-tracker';
import { RegisterForm } from "./form";
import { LanguageButton } from "src/atoms/lang-button";
import { LargeLogo } from "src/atoms/large-logo";
import { toast } from "react-toastify";
import { useLocalization } from "src/services/localization/i18n";

export const RegisterPage: React.FC<{}> = () => {
    const [loginResult, setLoginResult] = useState<string | undefined>(undefined);
    const { t } = useLocalization('auth.register');
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
            <RegisterForm loginResult={loginResult} onSubmit={({ email, password }) => {
                trackPromise(
                    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => toast(t('success'), { type: 'success' })),
                    'sign-in'
                ).catch(error => setLoginResult(error.code))
            }} />
        </Flex>
    );
};