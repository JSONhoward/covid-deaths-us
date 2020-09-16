import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { Theme } from './Theme.styled';


const root = document.getElementById('root') as HTMLElement

ReactDOM.unstable_createRoot(root).render(
    <RecoilRoot>
        <ThemeProvider theme={Theme}>
            <App />
        </ThemeProvider>
    </RecoilRoot>
)

serviceWorker.unregister();
