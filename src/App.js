import {Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import SignIn from './components/SignIn';
import SecretInfo from "./components/SecretInfo";
import NotFound from "./components/NotFound";

const App = () => 
{
  return (
    <div>
    <Navbar />
      <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/signup" component={SignUp} />
         <Route exact path="/signin" component={SignIn} />
         <Route exact path="/secretInfo" component={SecretInfo} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
