import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Sub from './components/Sub';
import { ThemeProvider } from './context/themeProvider';
import { GlobalStyle } from './theme/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Suspense fallback={<div>...loading</div>}>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/sub" component={Sub}/>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
