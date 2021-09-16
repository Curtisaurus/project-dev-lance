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
// import Nav from "./components/Nav";
// import Sidebar from "./components/Sidebar";
import ViewAllProjectCards from "./components/ViewAllProjectCards/index";
import AddProject from "./components/AddProjectForm/index";
import AddTeammates from "./components/TeammatesForm/index";
import UpdateProject from "./components/UpdateProjectForm/index";
import ViewSingleProject from "./components/ViewSingleProject";
import NavigationBar from "./components/Nav";
// import LoginForm from "./components/LoginForm";

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
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* <Sidebar /> */}
          <NavigationBar />
          <Switch>
            <Route exact path="/projects">
              <ViewAllProjectCards setModalShow={setModalShow} />
            </Route>
            <Route exact path="/create-project" component={AddProject} />
            <Route exact path="/update-project" component={UpdateProject} />
            <Route exact path="/add-teammates" component={AddTeammates} />
            {/* <Route exact path="/login" component={LoginForm} /> */}
            {/* <Route component={ViewAllProjectCards} /> */}
          </Switch>
          <ViewSingleProject
            show={modalShow}
            onHide={() => setModalShow(false)}
          />{" "}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
