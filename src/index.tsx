import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { RouterProvider, Route } from 'react-router5';
import { ApolloProvider } from 'react-apollo';

import client from './graphql/client';
import router from './router';

import * as serviceWorker from './serviceWorker';

import App from './App';
import Page404 from './pages/Page404';

const Index = () => (
  <ApolloProvider client={client}>
    <RouterProvider router={router}>
      <Route>{({ route }) => {
        if (route !== null) {
          return <App client={client} route={route}/>
        } else {
          return <Page404/>
        }
      }}</Route>
    </RouterProvider>
  </ApolloProvider>
);

const rootElement: HTMLElement = document.getElementById("root") as HTMLElement;

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<Index />, rootElement);
} else {
  ReactDOM.render(<Index />, rootElement);
}

serviceWorker.unregister();
