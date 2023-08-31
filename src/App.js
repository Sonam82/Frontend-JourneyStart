import CourseListing from "./Components/courses/CourseListing";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/home/Home";
import LoginForm from "./Components/signin/LoginForm";
import Contact from "./Components/contact/Contact";
import SignupForm from "./Components/signup/SignupForm";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={CourseListing} />
        <Route path="/login" component={LoginForm} />
        <Route path="/contact" component={Contact}/>
        <Route path="/signup" component={SignupForm}/>
      </Switch>
    </Router>
  );
};

export default App;