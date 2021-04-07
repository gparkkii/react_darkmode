import { Suspense } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './components/Main';
import Sub from './components/Sub';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>...loading</div>}>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/sub" component={Sub}/>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
