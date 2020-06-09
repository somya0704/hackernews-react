import React, { Component } from 'react'
import {GetStory} from '../config/api'
import '../stylesheets/Story.css'

class Story extends Component{
  constructor(props) {
    super(props)

    this.state = {
      story: {},
      loading: true
    }
  }

  componentDidMount(){
    const {storyId}  = this.props;
    GetStory(storyId).then((res) => {
      this.setState({ story: res, loading: false });
    }).catch(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <div className="new_story">
        <div><label className="new_story_tittle">{this.state.story.title}</label></div>
        <div><label className="new_story_by">{this.state.story.by} {this.state.story.time}</label></div>
        <div><a href={this.state.story.url}>Full Story</a></div>
      </div>
    )
  }
}
export default Story;