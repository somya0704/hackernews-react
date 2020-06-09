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
    return this.state.newstories.map(storyId =>(<Story key={storyId} storyId={storyId} />));
  }
}
export default StoriesContainer;

