
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Main.css';
import Alert from './Alert/Alert';
import NavBar from './NavBar/NavBar';
import Search from './Users/Search';
import User from './Users/User';
import Users from './Users/Users';
import GitHubState from '../context/GitHub/GitHubState';
import AlertState from '../context/Alert/AlertState';

const Main = () => {
    return (
        <GitHubState>
            <AlertState>
                <Router>
                    <NavBar></NavBar>
                    <div className="container">
                        <Alert/>
                        <Routes>
                            <Route
                                path={process.env.PUBLIC_URL + '/'}
                                element={
                                    <>
                                        <Search/>
                                        <Users />
                                    </>
                                }
                            />
                            <Route
                                path={process.env.PUBLIC_URL + '/user/:login'}
                                element={<User />}
                            />
                        </Routes>
                    </div>
                </Router>
            </AlertState>
        </GitHubState>
    )
}

export default Main;
