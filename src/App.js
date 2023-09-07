import CourseListing from "./Components/courses/CourseListing";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/home/Home";
import LoginForm from "./Components/signin/LoginForm";
import Contact from "./Components/contact/Contact";
import SignupForm from "./Components/signup/SignupForm";
import Html from "./Content/HtmlCard";
import Css from "./Content/Css";
import JavaScript from "./Content/JavaScript";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={CourseListing} />
        <Route path="/login" component={LoginForm} />
        <Route path="/contact" component={Contact}/>
        <Route path="/signup" component={SignupForm}/>
        <Route path="/Html-content-page" component={Html}/>
        <Route path="/Css-content-page" component={Css}/>
        <Route path="/Javascript-content-page" component={JavaScript}/>

      </Switch>
    </Router>
  );
};

export default App;