import { createGlobalStyle } from 'styled-components';

const darkTheme = {
    background: '#111926',
    backgroundLight: '#023649',
    primary: '#CDB380',
    primaryLighter: '#E8DDCB',
    secondary: '#026565',
    text: '#F8FDEB',
    error: '#C82D2B',
};

const customTheme = {
    colors: darkTheme,
    fonts: {
        // TODO: Use different fonts maybe?
        body: 'Montserrat, sans-serif',
        fantasy: 'MedievalSharp, Montserrat, sans-serif',
		heading: 'Montserrat, sans-serif',
        button: 'Montserrat, sans-serif',
    },
    text: {
        body: {
            fontFamily: 'body',
            fontWeight: 550,
            color: 'text',
        },
        caption: {
            variant: 'text.body',
            fontSize: '13px',
            opacity: .55,
        },
        label: {
            variant: 'text.body',
            fontSize: '14px',
            opacity: .55,
            fontWeight: 600,
        },
        error: {
            variant: 'text.body',
            fontSize: '13px',
            color: 'error',
        },
        heading1: {
            fontFamily: 'fantasy',
            fontWeight: 700,
            color: 'text',
            fontSize: '44px',
        },
        heading2: {
            variant: 'text.heading1',
            fontFamily: 'heading',
            fontSize: '32px',
        },
        heading3: {
            variant: 'text.heading2',
            fontSize: '26px',
            fontWeight: 600,
        }
    },
    buttons: {
        primary: {
            bg: 'primary',
            fontWeight: 600,
            outline: 'none',
            // TODO: Set loading indicator colour
        },
        secondary: {
            variant: 'primary',
            bg: 'secondary',
            fontWeight: 600,
        },
        hollow: {
            variant: 'buttons.primary',
            bg: 'transparent',
            color: 'primary',
            borderColor: 'primary',
            borderWidth: '2px',
            borderStyle: 'solid',
        },
        'secondary-hollow': {
            variant: 'buttons.hollow',
            color: 'secondary',
            borderColor: 'secondary',
        },
        'social-google': {
            variant: 'primary',
            bg: '#dd4b39',
            color: 'white',
            fontWeight: 600,
        },
        link: {
            bg: 'transparent',
            color: 'text',
            padding: 0,
            margin: 0,
            textDecoration: 'underline',
        }
    },
    forms: {
        input: {
            outline: 'none',
            borderWidth: '0 0 2px 0',
            borderColor: 'backgroundLight',
            bg: 'rgb(0, 0, 0, 0.2)',
            borderRadius: '5px 5px 0 0',
            color: 'text',
            fontSize: '15px',
            fontWeight: 550,
            transition: 'border 300ms ease-out',
            '&:focus': {
                borderColor: 'primary',
            }
        },
        select: {
            borderColor: 'backgroundLight',
            bg: 'rgb(0, 0, 0, 0.2)',
            borderWidth: '2px',
            borderRadius: '5px',
            color: 'text',
            fontWeight: 550,
            outline: 'none',
            transition: 'border 300ms ease-out',
            '&:focus': {
                borderColor: 'primary',
            },
            '& + svg': {
                fill: 'secondary'
            }
        }
    },
    variants: {
        center: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }
    }
}

export const GlobalStyle = createGlobalStyle`
    html, body {
        background-color: ${darkTheme.background};
    }
`;

export const theme = {
    ...customTheme,
}
