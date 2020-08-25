import React, { useState } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';
function NavBar() {
    const [open, setOpen] = useState(true);
    let navClassname = `ml-4 font-semibold`;
    const dispatch = useDispatch();
    const navVariants = {
        initial: {
            x: 300, opacity: 0 
        },
        animate: {
            x: 0, opacity: 1
        },
        exit: {
            x: -300, opacity: 0,
        }
    }

    return (
        <AnimateSharedLayout>
        <motion.div layout className="col-span-2 flex flex-col items-start justify-around fixed top-0 mt-24 p-6 left-0 z-20 border-red-200 border-r-2 rounded-full">

            {/* Menu */}
            <div className="cursor-pointer hover:bg-secondary-100 w-3/4 hover:text-gray-300 w-36 h-16 rounded-lg flex items-center justify-center" title="Menu">
                <motion.svg layout fill="none" viewBox="0 0 24 24" stroke="currentColor" className="menu-alt3 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></motion.svg>
            </div>

            {/* Home */}
                <Link to="/" className=" cursor-pointer hover:bg-secondary-100 w-full px-1 hover:text-gray-300 w-36 h-16 rounded-lg flex items-center justify-start" title="Home">
                    
                    <motion.svg layout fill="none" viewBox="0 0 24 24" stroke="currentColor" className="home w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></motion.svg>
                    <AnimatePresence>
                        <motion.div
                            className={open ? navClassname : 'hidden'}
                            animate="animate"
                            initial="initial"
                            variants={navVariants}
                            exit="exit"
                            >
                            Home
                        </motion.div>
                    </AnimatePresence>
                </Link>


            {/* Login */}
                <Link to="/signin" className=" cursor-pointer hover:bg-secondary-100 w-full px-1 hover:text-gray-300 w-36 h-16 rounded-lg flex items-center justify-start" title="Login">
                    <motion.svg layout fill="none" viewBox="0 0 24 24" stroke="currentColor" className="login w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></motion.svg>
                    <AnimatePresence>
                            <motion.div className={open ? navClassname : 'hidden'}
                                variants={navVariants}
                                initial="initial"
                                exit="exit"
                                animate="animate"
                            >
                            Sign In
                            </motion.div>
                    </AnimatePresence>
                </Link>

            {/* Logout */}
          
                <Link to="/signup" className=" cursor-pointer hover:bg-secondary-100 w-full px-1 hover:text-gray-300 w-36 h-16 rounded-lg flex items-center justify-start" title="Logout">
                    <motion.svg layout fill="none" viewBox="0 0 24 24" stroke="currentColor" className="logout w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></motion.svg>
                    <AnimatePresence>
                        <motion.div 
                            variants={navVariants}
                            initial="initial"
                            exit="exit"
                            animate="animate"                      
                        className={open ? navClassname : 'hidden'}>Sign Up</motion.div>
                    </AnimatePresence>
                </Link>
  


            {/* Mail */}
                <div className=" cursor-pointer hover:bg-secondary-100 w-full px-1 hover:text-gray-300 w-36 h-16 rounded-lg flex items-center justify-start" title="Mail"
                onClick={() => dispatch(logout())}
                >
                    <motion.svg layout fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mail w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></motion.svg>
                    <AnimatePresence>
                        <motion.div
                            variants={navVariants}
                            initial="initial"
                            exit="exit"
                            animate="animate"                           
                         className={open ? navClassname : 'hidden'}>Logout</motion.div>
                    </AnimatePresence>
                </div>


            {/* Bell */}
       
                <div className=" cursor-pointer hover:bg-secondary-100 w-full px-1 hover:text-gray-300 w-36 h-16 rounded-lg flex items-center justify-start" title="Bell">
                    <motion.svg layout fill="none" viewBox="0 0 24 24" stroke="currentColor" className="bell w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></motion.svg>
                    <AnimatePresence>
                        <motion.div className={open ? navClassname : 'hidden'}
                            variants={navVariants}
                            initial="initial"
                            exit="exit" 
                            animate="animate"                
                        >Notification</motion.div>                        
                    </AnimatePresence>

                </div>



            {/* Arrow */}
 
                <div className=" cursor-pointer hover:bg-secondary-100 w-3/4  hover:text-gray-300 w-36 h-16 rounded-lg flex items-center justify-center" title="Back"
                onClick={() => setOpen(!open)}
                >
                {
                    open? 
                    <AnimatePresence>
                            <motion.svg
                                layout
                                variants={navVariants}
                                initial="initial"
                                exit="exit"  
                                animate="animate"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor" className="arrow-left w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></motion.svg>
                    </AnimatePresence> : 
                    <AnimatePresence>
                            <motion.svg 
                                layout
                                variants={navVariants}
                                initial="initial"
                                exit="exit" 
                                animate="animate"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" className="arrow-right w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></motion.svg>
                    </AnimatePresence>
                }
                    
                </div>


        </motion.div>
        </AnimateSharedLayout>
    )
}

export default NavBar
