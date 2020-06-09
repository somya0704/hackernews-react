import React, { Component } from 'react'
import {GetNewStories} from '../config/api'
import Story from '../components/Story'

class StoriesContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newstories: [],
      loading: true
    }
  }

  componentDidMount() {
    GetNewStories().then((res) => {
      this.setState({ newstories: res, loading: false });
    }).catch(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <div>
        <h4>New Stories</h4>
        <div className="new_stories" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {this.state.newstories.map(storyId =>(<Story key={storyId} storyId={storyId} />))}
        </div>
      </div>
    );
  }
}
export default StoriesContainer;

