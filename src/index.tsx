import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from './app';

const client = new QueryClient();

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render((
        <QueryClientProvider client={client}>
            <App />
        </QueryClientProvider>
    ), document.getElementById('reactMountPoint'));
});
