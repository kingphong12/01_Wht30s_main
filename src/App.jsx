import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/pages/Header";
import Main from "./component/pages/Main";
import Footer from "./component/pages/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
