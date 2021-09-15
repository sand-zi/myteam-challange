import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import './assets/styles/styles.scss';

import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'

import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'
import { Contact } from './pages/Contact';



function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route path='/contact' component={Contact} exact />
          <Route path='/about' component={About} exact />
          <Route path='/' component={Home} exact />
        </Switch>
        <AppFooter />

      </div>
    </Router>

  );
}

export default App;
