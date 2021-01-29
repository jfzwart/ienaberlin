import React from 'react';
import Header from './Header';
import Home from './Home';
import Art from './Art';
import Sessions from './Sessions';
import Vintage from './Vintage';
import Footer from './Footer';
import Accessories from './Accessories';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import ContactForm from './ContactForm'

class App extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/art' exact component={Home}/>
                        <Route path='/sessions' exact component={Home}/>
                        <Route path='/contact' exact component={ContactForm} />
                        <Route path='/vintage' exact component={Home}/>
                        <Route path='/accessories' exact component={Home}/>
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