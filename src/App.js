import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StoriesContainer from './containers/StoriesContainer';

function App() {
  return(
    <Router>
      <div>
        <Route path="/" component={StoriesContainer} />
      </div>
    </Router>
  )
}

export default App;
