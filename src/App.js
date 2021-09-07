import React, { useState, useEffect } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import { API, Storage } from 'aws-amplify';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Menu from './components/menu';
import {PLACES} from './shared/place';
import Greet from './components/greet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Forecast from './components/Pages/Forecast';


function App(){
	return(
	<>
	<Router>
		<NavBar/>
		<Switch>
			<Route path="/" exact component={Home}/>
			<Route path='/Forecast' component={Forecast} />
		</Switch>
	</Router>
	</>
	);
}
export default App;