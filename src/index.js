import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from 'lib/store'
import App from './App'
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider store={store}>
    <App />
	</Provider>,
	document.getElementById('root')
)

console.log('NODE_ENV', process.env.NODE_ENV)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
