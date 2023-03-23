import React from "react";
//import { ReactDOM } from "react-dom/client";
//import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
//import * as serviceWorker from './serviceWorker';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
//import Footer from './components/Footer';

const root = createRoot(document.getElementById("root"));
root.render(
	<Router>
		<React.StrictMode>
			<Header />
			<Routes>
				<Route exact path="/" element={<App/>} />
			</Routes>
		</React.StrictMode>
	</Router>
);

