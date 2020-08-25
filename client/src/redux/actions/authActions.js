import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS, 
} from '../actions/types';

import { returnErrors, clearErrors } from './errorActions';

// Setup cofig/headers and token

export const tokenCofig = getState => {
    // get token from localStorage

    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // if token, add to headers
    if(token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}



// check token & load user

export const loadUser = () => async (dispatch, getState) => {
    // User Loading
    dispatch({ type : USER_LOADING });
    try {
        const res = await axios.get('/api/auth/user', tokenCofig(getState))
        dispatch({ type: USER_LOADED, payload: res.data })
    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status, 'USER_LOADED'));
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// register user 

export const register = ({ email, password, lastName, firstName }) => async (dispatch) => {
    // header
    const config = {
        headers: {
           'Content-type': 'application/json'
        }
    }
    // request body
    const body = JSON.stringify({ email, password, lastName, firstName });
        try {
            const res = await axios.post('/api/auth/signup', body, config);
            console.log(res.data);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        } catch (error) {
            console.log('thiss is Err: ' ,error.response.data, error.response.status);
            dispatch(returnErrors(error.response.data, error.response.status, 'REGISTER_FAIL'));
            dispatch({ type: REGISTER_FAIL })
        }

}

export const signIn = ({ email, password }) => async (dispatch) => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('/api/auth/signin', body, config);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        dispatch(clearErrors());
    } catch (error) {
       dispatch(returnErrors(error.response.data, error.response.status, 'LOGIN_FAIL'));
        dispatch({
            type: LOGIN_FAIL
        })
    }

}

// logout 

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}