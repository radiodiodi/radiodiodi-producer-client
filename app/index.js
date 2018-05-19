import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import theme from './theme';

const store = configureStore();

const mount = () => render(
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>
  </ThemeProvider>,
  document.getElementById('root')
);

mount();

if (module.hot) {
  module.hot.accept('./containers/Root', mount);
}
