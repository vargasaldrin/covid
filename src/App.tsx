import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import {
  BlogCreate,
  BlogDisplay,
  BlogUpdate,
  GraphOne,
  GraphTwo,
  Navbar,
  Profile,
} from "./components";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <GraphOne />
            <GraphTwo />
          </Route>
        </Switch>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/blog">
            <BlogDisplay />
          </Route>
        </Switch>
        <Switch>
          <Route path="/blog/create-blog">
            <BlogCreate />
          </Route>
        </Switch>
        <Switch>
          <Route path="/blog/update-blog">
            <BlogUpdate />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
