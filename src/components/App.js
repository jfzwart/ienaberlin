import React from 'react';
import Header from './Header';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' />
                    </Switch>
                </div>
                </Router>
                <div className="container">
                Website under contruction
                </div>
            </div>
        );
    };
};

export default App;