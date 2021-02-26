import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';

function App() {
    const [token, setToken] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="App">
            {console.log(token)}
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route
                        exact
                        path="/login"
                        render={(props) => (
                            <Login
                                setLoggedIn={setLoggedIn}
                                setToken={setToken}
                            />
                        )}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
