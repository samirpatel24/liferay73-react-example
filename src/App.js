import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import SingleBlog from "./pages/SingleBlog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={0} classNames="fade">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/rooms/" component={Rooms} />
                <Route exact path="/rooms/:slug" component={SingleRoom} />
                <Route exact path="/blogs/" component={Blogs} />
                <Route exact path="/blogs/:slug" component={SingleBlog} />

                <Route component={Error} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
