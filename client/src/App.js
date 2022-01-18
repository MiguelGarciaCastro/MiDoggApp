import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// ApolloProvider makes Graph API requests available to entire app
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/home";
import aboutpage from "./pages/about";
import { StoreProvider } from "./utils/GlobalState";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cities from "./components/Cities";
import Nav from "./components/Nav";
import Login from "./components/Login";
import "./App.css";
import Social from "./components/Social";
import SignUp from "./components/SignUp";
import NoMatch from './pages/noMatch';
import Blog from './pages/blog';
import User from './components/User';
import Contact from './components/Contact';
import SinglePost from './components/SinglePost';



const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
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

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});
// console.log(authLink.concat(httpLink))
// console.log(errorLink)
// console.log(from([errorLink, authLink.concat(httpLink)]))
// console.log(errorLink)
// console.log(from([errorLink, authLink,httpLink]))


const client = new ApolloClient({
  link: from([errorLink, authLink,httpLink]),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* All components between <StoreProvider> are children */}
          <StoreProvider>
            <Nav />
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cities" component={Cities} />
                <Route exact path="/about" component={aboutpage} />
                <Route exact path="/nav" component={Nav} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/social" component={Social} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/user" component={User} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/post/:id" component={SinglePost} />
                <Route component={NoMatch} />
              </Switch>
            </div>
            {/* <Footer /> */}
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
