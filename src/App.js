import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/experience'} component={Experience} />
                <Route exact path={'/contact'} component={Contact} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
