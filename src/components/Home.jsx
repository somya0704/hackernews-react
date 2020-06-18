import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import StoriesContainer from '../containers/StoriesContainer';
import Header from './Header';

function Home() {
  return(
    <Router>
      <div>
        <Header />
        <Route path="/stories" component={StoriesContainer} />
      </div>
    </Router>
  )
}

export default Home;
