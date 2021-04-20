import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Navbar from './NavBar'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../css/App.css'


const AUTH_URL = 'https://accounts.spotify.com/authorize?' +
  'client_id=' + process.env.REACT_APP_CLIENT_ID+ '&' +
  'response_type=code&' +
  'scope=streaming%20user-read-email%20user-read-private%20user-read-playback-state%20user-modify-playback-state%20user-library-read%20user-library-modify&' +
  'redirect_uri=' + process.env.REACT_APP_REDIRECT_URL

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route
            path="/dashboard"
            render={() => <Dashboard code={code} />}
          />
          <Route path='/spotify' component={() => {
            window.location = AUTH_URL;
            return null;
          }} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
