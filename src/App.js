import React from "react";
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
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/blogs/" component={Blogs} />
        <Route exact path="/blogs/:slug" component={SingleBlog} />

        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
