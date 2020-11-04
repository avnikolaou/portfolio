import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path={'/'} component={Home} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
