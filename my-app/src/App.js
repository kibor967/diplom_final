import { Route, Switch, Redirect,} from "react-router-dom";
import './App.css';
import { MainPage } from "../src/components/pages/mainPage";
import { CotegoryPage } from "../src/components/pages/сotegoryPage";
import { TemplatePage } from "../src/components/pages/descriptionBikesPages/TemplatePage/index.js";

function App() {
  return (
    <div className = "App">
    <Switch>
      <Route path="/main-page" render = {() => <MainPage /> }/>
      <Route path="/cotegory-page" render = {() => <CotegoryPage />}/>
      <Route path="/template-page" render = {() => <TemplatePage />}/>
      <Route path="/">
        <Redirect to="/main-page" />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
