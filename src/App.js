import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import './App.css';
import { Redirect } from 'react-router-dom';

function App() {
    const [token, setToken] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    // updated is used to cause a rerender when posts are deleted
    const [updated, setUpdated] = useState(false);

    return (
        <div className="App">
            <Router>
                {!loggedIn ? <Redirect to="/login" /> : null}
                <NavBar
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    setToken={setToken}
                />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Home updated={updated} setUpdated={setUpdated} />
                        )}
                    />
                    <Route
                        exact
                        path="/createpost"
                        render={() => <CreatePost token={token} />}
                    />
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
                    <Route
                        exact
                        path="/post/:id"
                        render={({ match }) => (
                            <PostPage
                                token={token}
                                match={match}
                                updated={updated}
                                setUpdated={setUpdated}
                            />
                        )}
                    />
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
