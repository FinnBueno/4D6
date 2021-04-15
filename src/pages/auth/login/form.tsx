import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tiles } from "@rebass/layout";
import React from "react";
import { useForm } from "react-hook-form";
import { trackPromise } from "react-promise-tracker";
import { useHistory } from "react-router-dom";
import { Flex, Text } from "rebass";
import { Input, MButton, ProgressButton } from "src/atoms";
import { signInWithGoogle } from "src/services/firebase";
import { useLocalization } from "src/services/localization/i18n";

type LoginFormInput = {
    email: string;
    password: string;
};

export const LoginForm: React.FC<{ onSubmit: (input: LoginFormInput) => void, loginResult?: string }> = ({ onSubmit, loginResult }) => {
    const history = useHistory();
    const { handleSubmit, control } = useForm<LoginFormInput>({
        defaultValues: {
            email: '',
            password: '',
        }
    });
    const { t } = useLocalization('auth.login');

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '260px', maxWidth: '90%' }}>
            <Tiles columns={[1]} gap={3} style={{ width: '100%' }}>
                <Input
                    control={control}
                    rules={{ required: true, pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i }}
                    type='email'
                    name='email'
                    label={t('email')}
                />
                <Input
                    control={control}
                    rules={{ required: true }}
                    type='password'
                    name='password'
                    label={(t('password'))}
                />
                <Flex flexDirection='column'>
                    {loginResult === 'auth/wrong-password' ? <Text mb={1} variant='error'>{t('errors.accountNotFound')}</Text> : ''}
                    {loginResult === 'auth/user-not-found' ? <Text mb={1} variant='error'>{t('errors.accountNotFound')}</Text> : ''}
                    {loginResult !== 'auth/wrong-password' && loginResult !== 'auth/user-not-found' && loginResult ? <Text mb={1} variant='error'>{t('errors.unknown')}</Text> : ''}
                    <ProgressButton scope='sign-in' onClick={handleSubmit(onSubmit)}>
                        {t('loginBtn')}
                    </ProgressButton>
                    <Flex flexDirection='column' mb={3}>
                        <Text variant='caption' textAlign='center' mt={3} mb={1}>{t('useExistingAccount')}</Text>
                        <ProgressButton
                            variant='social-google'
                            scope='sign-in'
                            onClick={(e) => {
                                e.preventDefault();
                                trackPromise(
                                    signInWithGoogle(),
                                    'sign-in'
                                )
                            }}
                        >
                            <Flex justifyContent='center'>
                                <Flex mr={2}>
                                    <FontAwesomeIcon icon={faGoogle} />
                                </Flex>
                                {t('loginWithGoogle')}
                            </Flex>
                        </ProgressButton>
                    </Flex>
                    <MButton variant='link' onClick={(e) => {
                        e.preventDefault();
                        history.push('/register');
                    }}>
                        {t('registerInstead')}
                    </MButton>
                </Flex>
            </Tiles>
        </form>
    );
};