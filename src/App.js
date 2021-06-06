import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Home from "./Pages/Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import "./cssfiles/app.css"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/series" exact component={Series}/>
      <Route path="/Movies" exact component={Movies}/>
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;