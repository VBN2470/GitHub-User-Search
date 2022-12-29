
import React, { useReducer } from 'react';
import axios from 'axios';
import GitHubContext from './GitHubContext';
import GitHubReducer from './GitHubReducer';
import {
    SEARCH_USERS,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
    SET_LOADING
} from '../types';

const GitHubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        isLoading: false,
    }

    const [state, dispatch] = useReducer(GitHubReducer, initialState)

    const searchUsers = async text => {
        setLoading();
        const currentUsers = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({ 
            type: SEARCH_USERS,
            payload: currentUsers.data.items
        });
    }

    const findUser = async username => {
        setLoading();
        const currentUser = await axios.get(`https://api.github.com/users/${username}?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type: GET_USER,
            payload: currentUser.data
        });
    }
    const findUserRepos = async (username, num) => {
        setLoading();
        const currentUserRepos = await axios.get(`https://api.github.com/users/${username}/repos?per_page=${num}
        &sort=created:asc&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
        ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type: GET_REPOS,
            payload: currentUserRepos.data
        });
    }

    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    const setLoading = () => dispatch({ type: SET_LOADING });
    
    return (
        <GitHubContext.Provider value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            isLoading: state.isLoading,
            searchUsers,
            clearUsers,
            findUser,
            findUserRepos
        }}>
            {props.children}
        </GitHubContext.Provider>
    );
}

export default GitHubState;
