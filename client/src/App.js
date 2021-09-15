import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Components
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import ViewAllProjectCards from "./components/ViewAllProjectCards/index";
import AddProject from "./components/AddProjectForm/index";
import AddTeammates from "./components/AddTeammatesForm/index";
import UpdateTeammates from "./components/UpdateTeammatesForm/index";
import UpdateProject from "./components/UpdateProjectForm/index";
import ViewSingleProject from "./components/ViewSingleProject/index";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Sidebar />
          <Nav />
          <Switch>
            <Route exact path="/projects" component={ViewAllProjectCards} />
            {/* <Route exact path="/projects" component={ViewSingleProject} /> */}
            <Route exact path="/create-project" component={AddProject} />
            <Route exact path="/update-project" component={UpdateProject} />
            <Route exact path="/add-teammates" component={AddTeammates} />
            <Route exact path="/update-teammates" component={UpdateTeammates} />
            <Route component={ViewAllProjectCards} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
