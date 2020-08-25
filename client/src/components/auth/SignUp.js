import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { register } from '../../redux/actions/authActions';
import { connect} from 'react-redux';

function SignUp({ register, isAuthenticated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const onEmailChange= (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const onLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const onHandlerSubmit = (e) => {
        e.preventDefault();
        // console.log(JSON.stringify({ email, password, lastName, firstName }));
        register(email, password, lastName, firstName);
    }

    // if (isAuthenticated === true ) return Redirect('/')

    return (
        <div className="px-8 pt-6 z-40 col-start-4 col-end-8">
            <form className="bg-white p-8 rounded-md" onSubmit={onHandlerSubmit}>
                <h5 className="text-gray-700 text-2xl font-extrabold">Sign Up</h5>
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

                <div className="input-field my-8 flex flex-col">
                    <label htmlFor="firstName" className="my-2 mx-2 font-semibold text-primary-700">First Name</label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="firstName"
                    id="firstName"
                    placeholder="First Name"
                    onChange={onFirstNameChange} />
                </div>

                <div className="input-field my-8 flex flex-col">
                    <label htmlFor="lastName" className="my-2 mx-2 font-semibold text-primary-700">Last Name</label>
                    <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    onChange={onLastNameChange} />
                </div>

                <button 
                className="px-12 py-2 text-xl font-semibold text-red-100 bg-green-500 rounded-full"
                onSubmit={onHandlerSubmit}
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (email, password, firstName, lastName) => dispatch(register({email, password, lastName, firstName}))
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
