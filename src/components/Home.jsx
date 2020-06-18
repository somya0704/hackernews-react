import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NewStoriesContainer from '../containers/NewStoriesContainer';
import TopStoriesContainer from '../containers/TopStoriesContainer';
import Header from './Header';

function Home() {
  return(
    <Router>
      <>
        <Header />
        <Route exact from="/" to="newStories" component={NewStoriesContainer} />
        <Route exact from="/" to="topStories" component={TopStoriesContainer} />
      </>
    </Router>
  )
}

export default Home;
