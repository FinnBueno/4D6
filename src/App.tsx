import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle, theme } from './theme/configuration';
import { PageManager } from './pages/router';
import { AuthProvider } from './services/auth/context';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC<{}> = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
    			<GlobalStyle />
				<ToastContainer />
				<AuthProvider>
				{/* <SettingsProvider> */}
					{/* <Switch> */}
            	    <PageManager />
					{/* </Switch> */}
				{/* </SettingsProvider> */}
				</AuthProvider>
		    </ThemeProvider>
        </Router>
    );
}

export default App;
