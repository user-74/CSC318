import {Route, BrowserRouter, Switch} from "react-router-dom"
import Homepage from './Homepage/homepage'
import VideoPage from './Video/VideoPage'
import LeaderBoard from "./LeaderBoard/LeaderBoard";

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
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
