import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeContext } from "./context/Context";
import { GlobalStyle } from "./globalStyle/GlobalStyle";

import {
  BlogCreate,
  BlogDisplay,
  BlogShowcase,
  BlogUpdate,
  EditProfile,
  Footer,
  GraphOne,
  GraphTwo,
  GraphThree,
  Navbar,
  Profile,
} from "./components";

function App() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="App">
      <GlobalStyle toggleTheme={toggleTheme} />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <GraphOne />
            <GraphTwo />
            <GraphThree />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
        <Switch>
          <Route path="/profile/edit">
            <EditProfile />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/blog">
            <BlogShowcase />
          </Route>
        </Switch>
        <Switch>
          <Route path="/blog/:blogName">
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
