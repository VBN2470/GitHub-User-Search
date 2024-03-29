import {
    SEARCH_USERS,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
    SET_LOADING
} from '../types';

const GitHubReducer = (state, action) => {
    switch (action.type) {
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                isLoading: false,
            }
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                isLoading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                isLoading: false
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}

export default GitHubReducer;
