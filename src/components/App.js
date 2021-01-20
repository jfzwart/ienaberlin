import React from 'react';
import Header from './Header';
import Home from './Home';
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
                        <Route path='/' exact component={Home}/>
                        <Route path='/art' exact />
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