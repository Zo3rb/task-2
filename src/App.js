import React, { Fragment, useState } from 'react';
import './styles/baseStyle.scss';
import AppRouter from './routes/AppRouter';
import { Header } from './components';

function App() {

  /*
    Declaring The States Here
    signedIn == if The User Signed In Already
    currentUser == Getting Random Person from The API
    userList in Case Successful Signed In to Fetch Data
  */
  const [signedIn, setSignedIn] = useState(false);

  // Declare Sign In & SignOut Toggle Function to Run from The Sign In Form
  const loggedIn = () => {
    setSignedIn(true)
  }
  const loggedOut = () => {
    setSignedIn(false)
  }

  return (
    <Fragment>
      <Header signedIn={signedIn} loggedIn={loggedIn} loggedOut={loggedOut} />
      <AppRouter />
    </Fragment>
  );
}

export default App;
