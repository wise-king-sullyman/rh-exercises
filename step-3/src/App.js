import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import "./App.css";
import UserDetail from "./components/UserDetail/UserDetail";
import UserList from "./components/UserList/UserList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/users/:id">
            <Show />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <UserList />;
}

function Show() {
  const { id } = useParams();
  return <UserDetail id={id} />;
}
