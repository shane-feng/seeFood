import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavbar';
import IngredientsList from './components/IngredientsList';

class App extends Component {
    render() {
        return (
            <div>
                <AppNavbar></AppNavbar>
                <Router>
                    <Route exact path="/" component={IngredientsList} />
                </Router>
            </div>
        );
    }
}

export default App;
