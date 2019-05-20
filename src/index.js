import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import 'rsuite/dist/styles/rsuite.min.css';
import App from 'src/modules/App';
import * as serviceWorker from './serviceWorker';
import configApolloClient from './configApolloClient';

const apolloClient = configApolloClient();

const AppWithProviders = AppComponent => (
	<ApolloProvider client={apolloClient}>
		<AppComponent />
	</ApolloProvider>
);

ReactDOM.render(AppWithProviders(App), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
