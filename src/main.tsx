import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Study from "./pages/Study"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/study' exact component={Study} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;