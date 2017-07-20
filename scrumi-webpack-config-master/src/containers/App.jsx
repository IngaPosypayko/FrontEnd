/*
 * Core imports
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

/*
 * Container imports
 */
import ProjectPage from 'containers/views/Project';
import ChatPage from 'containers/views/Chat';
import BacklogPage from 'containers/views/Backlog';
import CalendarPage from 'containers/views/Calendar';
import BoardPage from 'containers/views/Board';
import RetroPage from 'containers/views/Retro';

/*
 * Component imports
 */
import Menu from 'components/Menu/Menu';

/*
 * Common styles and theme
 */
import 'styles/base.scss';

/*
 * Router history to be passed to children
 */
const history = createBrowserHistory();

/*
* App components defines application routes
*/
const App = () => (
  <Router history={history}>
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={ProjectPage} />
        <Route exact path="/chat" component={ChatPage} />
        <Route exact path="/backlog" component={BacklogPage} />
        <Route exact path="/calendar" component={CalendarPage} />
        <Route exact path="/board" component={BoardPage} />
        <Route exact path="/retro" component={RetroPage} />
        <Route render={() => <h1>PAGE NOT FOUND!</h1>} />
      </Switch>
    </div>
  </Router>
);

export default App;
