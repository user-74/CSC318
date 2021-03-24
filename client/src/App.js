import {Route, BrowserRouter, Switch} from "react-router-dom"
import Homepage from './Homepage/homepage'
import VideoPage from './Video/VideoPage'
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import Transition from "./Transition/Transition";
import Trainer from "./Trainer/Trainer";
import MakePlan from "./MakePlan/MakePlan";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Switch>
            <Route path={"/"} exact component={Homepage} />
            <Route path={"/homepage"} exact component={Homepage} />
            <Route path={"/video"} exact component={VideoPage} />
            <Route path={"/leaderboard"} exact component={LeaderBoard} />
            <Route path={"/transition"} exact component={Transition} />
            <Route path={"/trainer"} exact component={Trainer} />
            <Route path={"/makeplan"} exact component={MakePlan} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
