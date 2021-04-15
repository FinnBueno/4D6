import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tiles } from "@rebass/layout";
import React from "react";
import { useForm } from "react-hook-form";
import { trackPromise } from "react-promise-tracker";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Flex, Text } from "rebass";
import { Input, MButton, ProgressButton } from "src/atoms";
import { signInWithGoogle } from "src/services/firebase";
import { useLocalization } from "src/services/localization/i18n";

type RegisterFormInput = {
    email: string;
    password: string;
    passwordCheck: string;
};

export const RegisterForm: React.FC<{ onSubmit: (input: RegisterFormInput) => void, loginResult?: string }> = ({ onSubmit, loginResult }) => {
    const history = useHistory();
    const { handleSubmit, control, watch } = useForm<RegisterFormInput>({
        defaultValues: {
            email: '',
            password: '',
            passwordCheck: '',
        }
    });
    const { t } = useLocalization('auth.register');
    const password = watch('password', '');

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
                    rules={{ required: true, minLength: 6 }}
                    type='password'
                    name='password'
                    label={(t('password'))}
                />
                <Input
                    control={control}
                    rules={{ required: true, minLength: 6, validate: value =>
                        value === password || t('errors.passwordsDontMatch')
                    }}
                    type='password'
                    name='passwordCheck'
                    label={(t('passwordCheck'))}
                />
                <Flex flexDirection='column'>
                    {loginResult === 'auth/email-already-in-use' ? <Text mb={1} variant='error'>{t('errors.emailInUse')}</Text> : ''}
                    {loginResult !== 'auth/email-already-in-use' && loginResult ? <Text mb={1} variant='error'>{t('errors.unknown')}</Text> : ''}
                    <ProgressButton scope='sign-in' onClick={handleSubmit(onSubmit)}>
                        {t('registerBtn')}
                    </ProgressButton>
                    <Flex flexDirection='column' mb={3}>
                        <Text variant='caption' textAlign='center' mt={3} mb={1}>{t('useExistingAccount')}</Text>
                        <ProgressButton
                            variant='social-google'
                            scope='sign-in'
                            onClick={(e) => {
                                e.preventDefault();
                                trackPromise(
                                    signInWithGoogle().then(() => toast(t('success'), { type: 'success' })),
                                    'sign-in'
                                )
                            }}
                        >
                            <Flex justifyContent='center'>
                                <Flex mr={2}>
                                    <FontAwesomeIcon icon={faGoogle} />
                                </Flex>
                                {t('registerWithGoogle')}
                            </Flex>
                        </ProgressButton>
                    </Flex>
                    <MButton variant='link' onClick={(e) => {
                        e.preventDefault();
                        history.push('/login');
                    }}>
                        {t('loginInstead')}
                    </MButton>
                </Flex>
            </Tiles>
        </form>
    );
};