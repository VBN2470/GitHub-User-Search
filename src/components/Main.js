
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Main.css';
import Alert from './Alert/Alert';
import NavBar from './NavBar/NavBar';
import Search from './Users/Search';
import User from './Users/User';
import Users from './Users/Users';
import axios from 'axios';

const Main = () => {

    const [alert, setAlert] = useState(null);
    const [loading, setLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);

    const searchUsers = async text => {
        setLoading(true);
        const currentUsers = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        setUsers(currentUsers.data.items);
        setLoading(false);
    }

    const getUser = async username => {
        setLoading(true);
        const currentUser = await axios.get(`https://api.github.com/users/${username}?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        setUser(currentUser.data);
        setLoading(false);
    }

    const getUserRepos = async (username, num) => {
        setLoading(true);   
        const currentUserRepos = await axios.get(`https://api.github.com/users/${username}/repos?per_page=${num}
        &sort=created:asc&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        setRepos(currentUserRepos.data);
        setLoading(false);
    }

    const clearUsers = () => {
        setUsers([]);
        setLoading(false);
    }

    const displayAlert = (message, type) => {
        setAlert({message, type});

        setTimeout(() => setAlert(null), 2000);
    }

    return (
        <Router>
            <NavBar></NavBar>
            <div className="container">
                <Alert 
                    alert={alert}>
                </Alert>
                <Switch>
                    <Route 
                        exact 
                        path={process.env.PUBLIC_URL + '/'}
                        render={props => (
                            <>
                                <Search
                                    showClearBar={users.length > 0 ? true : false}
                                    clearUsers={clearUsers}
                                    searchUsers={searchUsers}
                                    showAlertBar={displayAlert}/>
                                <Users loading={loading} users={users} />
                            </>
                        )}
                    />
                    <Route 
                        exact 
                        path={process.env.PUBLIC_URL + '/user/:login'} 
                        render={props => (
                            <>
                                <User
                                    {...props}
                                    getUser={getUser}
                                    getUserRepos={getUserRepos}
                                    repos={repos}
                                    user={user}
                                    loading={loading}/>
                            </>
                        )}
                    />
                </Switch>
            </div>
        </Router>
    )
}

export default Main;
