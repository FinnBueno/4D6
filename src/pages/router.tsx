import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Flex } from 'rebass';
import { AuthenticatedRoute, UnauthenticatedRoute } from 'src/services/auth';
import { LandingPage, LoginPage, RegisterPage } from 'src/pages/auth';
import { UI } from 'src/pages/ui';

export const PageManager: React.FC<{}> = () => (
    <Flex justifyContent='center' width='100%'>
        <Flex flexDirection='column' width='100%' maxWidth='1200px'>
            <Switch>
                <Route path='/ui' component={UI} />
                <UnauthenticatedRoute path='/login' component={LoginPage} />
                <UnauthenticatedRoute path='/register' component={RegisterPage} />
                <UnauthenticatedRoute path='/landing' component={LandingPage} />
                <AuthenticatedRoute path='/' component={UI} />
            </Switch>
        </Flex>
    </Flex>
);
