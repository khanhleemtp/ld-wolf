import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/actions/authActions';


function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const onEmailChange= (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onHandlerSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        dispatch(signIn({ email, password }))
    }

    if(isAuthenticated === true ) return Redirect('/')

    return (
        <div className="container mx-auto px-8 pt-6 pb-8 col-start-4 col-end-8 z-40">
            <form className="bg-white p-8 rounded-md" onSubmit={onHandlerSubmit}>
                <h5 className="text-gray-700 text-2xl font-extrabold">Sign In</h5>
                <div className="input-field my-8 flex flex-col">
                    <label htmlFor="email" className="my-2 mx-2 font-semibold text-primary-700">Email</label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={onEmailChange} />
                </div>
                <div className="input-field my-8 flex flex-col">
                    <label htmlFor="password" className="my-2 mx-2 font-semibold text-primary-700">Password</label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={onPasswordChange} />
                </div>
                <button className="px-12 py-2 text-xl font-semibold text-red-100 bg-green-500 rounded-full">
                    Sign In
                </button>
            </form>
        </div>
    )
}



export default SignIn;
