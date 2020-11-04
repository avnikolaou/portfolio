import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact={'/'} component={Home} />
            </Switch>
        </div>
    );
}

export default App;
