import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Import Views
import Home from "./views/Home";
import CreateProject from "./views/CreateProject";
import EditProject from "./views/EditProject";
import AddTeammates from "./views/AddTeammates";
// import NoMatch from "./pages/NoMatch";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// Import Components
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

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
          <>
            <Sidebar />
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/create-project" component={CreateProject} />
              <Route exact path="/edit-project" component={EditProject} />
              <Route exact path="/add-teammates" component={AddTeammates} />
              {/* <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} /> */}
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
