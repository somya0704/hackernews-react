import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NewStoriesContainer from '../containers/NewStoriesContainer';
import TopStoriesContainer from '../containers/TopStoriesContainer';
import AskStoriesContainer from '../containers/AskStoriesContainer';
import JobStoriesContainer from '../containers/JobStoriesContainer';
import Header from './Header';

function Home() {
  return(
    <Router>
      <>
        <Header />
        <Route path="/" component={NewStoriesContainer} />
        <Route path="/topStories" component={TopStoriesContainer} />
        <Route path="/askStories" component={AskStoriesContainer} />
        <Route path="/jobStories" component={JobStoriesContainer} />
      </>
    </Router>
  )
}

export default Home;
