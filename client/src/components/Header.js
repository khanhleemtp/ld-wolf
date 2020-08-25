import React, { useEffect, useState } from 'react';
import imgWolf from '../img/imgNav/wolf-3.svg';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '../redux/actions/authActions'
function Header() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const dipatch = useDispatch();
    useEffect(() => {
      dipatch(loadUser());
    }, [isAuthenticated])
    const user = useSelector(state => state.auth.user);
    return (
        <nav className="col-start-2 col-end-12 flex items-center justify-between z-30">
            <div className="logo h-16 flex">
                <div className="flex justify-center items-center">
                    <img className="w-16 mr-4 cursor-pointer" src={imgWolf} alt="wolf" />
                    <div className="text-xl font-extrabold text-red-800 bg-green-100 rounded-lg px-4"> Welcome {
                        user && user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : 'hero'
                    }</div>
                </div>

            <form className="flex items-center justify-center ml-8">
                <input
                className="shadow appearance-none border rounded py-2 px-4 mx-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12" 
                id="search" type="text"
                placeholder="Find something" />
                <button className="bg-secondary-200 rounded-md px-4 text-red-100 h-12 hover:bg-red-400">Search</button>
            </form>    
            </div>
            {/* <div className="flex">
                <div className="bg-secondary-200 rounded-md px-4 py-3 text-red-100 h-12 hover:bg-red-400 mx-4 cursor-pointer">Sign in</div>
                <div className="bg-secondary-200 rounded-md px-4 py-3 text-red-100 h-12 hover:bg-red-400 cursor-pointer">Sign up</div>
            </div> */}

        </nav>
    )
}

export default Header
