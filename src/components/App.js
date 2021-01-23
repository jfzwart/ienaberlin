import React from 'react';
import Header from './Header';
import Home from './Home';
import Art from './Art';
import Contact from './Contact';
import Sessions from './Sessions';
import Vintage from './Vintage';
import Footer from './Footer';
import Accessories from './Accessories';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/art' exact component={Art}/>
                        <Route path='/contact' exact component={Contact} />
                        <Route path='/sessions' exact component={Sessions}/>
                        <Route path='/vintage' exact component={Vintage}/>
                        <Route path='/accessories' exact component={Accessories}/>
                    </Switch>
                    <Footer />
                </div>
                </Router>
            </div>
        );
    };
};

library.add(fab)

export default App;