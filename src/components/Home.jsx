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
        <Route exact path="/" component={NewStoriesContainer} />
        <Route exact path="/topStories" component={TopStoriesContainer} />
        <Route exact path="/askStories" component={AskStoriesContainer} />
        <Route exact path="/jobStories" component={JobStoriesContainer} />
      </>
    </Router>
  )
}

export default Home;
