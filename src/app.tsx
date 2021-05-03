import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from 'components/footer';
import Menu from 'components/menu';
import Index from 'pages/index';
import type { FC } from 'react';

const App: FC = () => {
  return (
    // NOTE: for github page. Remove `basename` if using custom domain.
    <BrowserRouter basename="/react-webpack-ts">
      <header>
        <Menu />
      </header>
      <main id="main-content">
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
