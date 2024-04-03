import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      {/* add routes with layouts */}

      {/* <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} /> */}

      <Route path="/admin" render={() => <Admin />} />
      <Route path="/auth" render={() => <Auth />} />
      
      {/* add routes without layouts */}
      
      {/* <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Index} /> */}

      <Route path="/landing" exact render={() => <Landing />} />
      <Route path="/profile" exact render={() => <Profile />} />
      <Route path="/" exact render={() => <Index />} />

      {/* add redirect for first page */}
      {/* if any one change the url and tried to get that then it redirect the firat page. */}
      <Redirect from="*" to="/" />
      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
