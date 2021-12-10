import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./component/pages/HomePage";
import Footer from "./feature/footer/Footer";
import Header from "./feature/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
