import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/actions/authActions';
// import io from 'socket.io-client'
import NavBar from './components/NavBar';
import Header from './components/Header';
import Background from './components/Background';
import { Switch, Route } from 'react-router';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';

function App() {
  // const socket = io('/');
    // const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    // const dipatch = useDispatch();
    // useEffect(() => {
    //   dipatch(loadUser());
    // }, [isAuthenticated])
  
  return (
    <Switch>
    <React.Fragment>
      <div className="font-body grid grid-cols-12 gap-2 m-4 p-4">
          <Background />
          <NavBar />
          <Header />
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin"component={SignIn} />
      </div>
    </React.Fragment>
    </Switch>

  );
}

export default App;
