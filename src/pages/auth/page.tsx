import React from "react";
import { Box, Flex, Heading, Text } from "rebass";
import { Tiles } from "@rebass/layout";
import { MButton } from "src/atoms";
import { ReactComponent as D20 } from 'src/assets/d20.svg';
import { SvgLogo } from "src/assets/svg-logo";
import { useHistory } from "react-router-dom";
import { LargeLogo } from "src/atoms/large-logo";
import { useLocalization } from "src/services/localization/i18n";
import { LanguageButton } from "src/atoms/lang-button";

export const LandingPage: React.FC<{}> = () => {
    const history = useHistory();
    const { t } = useLocalization('auth.welcome');
    return (
        <Flex variant='center'>
            <Box style={{
                position: 'absolute',
                top: 16,
                right: 16,
            }}>
                <LanguageButton size={36} />
            </Box>
            <Flex flexDirection='column' alignItems='center' width='100%' mb={4}>
                <LargeLogo />
                <Text variant='body' width='270px' maxWidth='90%' textAlign='center'>
                    {t('welcome')}
                </Text>
            </Flex>
            <Tiles columns={[1]} gap={3} style={{ width: '260px', maxWidth: '90%' }}>
                <MButton variant='hollow' onClick={() => history.push('/register')}>{t('register')}</MButton>
                <MButton onClick={() => history.push('/login')}>{t('login')}</MButton>
                <MButton variant='link' onClick={() => history.push('/learn-more')}>{t('learnmore')}</MButton>
            </Tiles>
        </Flex>
    );
};
