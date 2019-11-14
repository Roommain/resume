/*
 * @LastEditTime: 2019-09-18 13:46:27
 * @LastEditors: litianfu
 */
import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WrappedNormalLoginForm from './view/login';
import Resume from './view/resume/resume';
// ReactDOM.render(<App name="Sara"/>, document.getElementById('root'));
ReactDOM.render(<Resume/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
