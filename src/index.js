import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import 'rsuite/dist/styles/rsuite.min.css';
import Main from './pages/Main';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';
import configApolloClient from './configApolloClient';

const store = configureStore();
const apolloClient = configApolloClient();

const AppWithProviders = AppComponent => (
	<ApolloProvider client={apolloClient}>
		<Provider store={store}>
			<AppComponent />
		</Provider>
	</ApolloProvider>
);

ReactDOM.render(AppWithProviders(Main), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
