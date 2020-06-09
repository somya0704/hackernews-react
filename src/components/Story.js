import React, { Component } from 'react'
import {GetStory} from '../config/api'

class Story extends Component{
  constructor(props) {
    super(props)

    this.state = {
      story: {},
      loading: true
    }
  }

  componentDidMount(){
    const storyId  = this.props.storyId;
    GetStory(storyId).then((res) => {
      this.setState({ story: res, loading: false });
    }).catch(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <p>{JSON.stringify(this.state.story)}</p>
    )
  }
}
export default Story;