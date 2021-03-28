import { Route, BrowserRouter, Switch } from "react-router-dom";
import Homepage from "./Homepage/homepage";
import VideoPage from "./Video/VideoPage";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import Transition from "./Transition/Transition";
import MakePlan from "./MakePlan/MakePlan";
import Progress from "./Progress/Progress";
import "fontsource-roboto";

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
            <Route path={"/makeplan"} exact component={MakePlan} />
            <Route path={"/progress"} exact component={Progress} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
