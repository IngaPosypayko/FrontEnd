/*
 * Core imports
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

/*
 * Component imports
 */
import App from 'containers/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app-root'),
  );
};

render(App);

if (module.hot) module.hot.accept('containers/App', () => { render(App); });
