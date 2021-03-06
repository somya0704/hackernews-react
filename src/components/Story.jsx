import React, { Component } from 'react'
import {GetStory} from '../config/api'
import '../stylesheets/Story.css'
import Moment from 'moment';

class Story extends Component{
  constructor(props) {
    super(props)

    this.state = {
      story: {},
      loading: false
    }
  }

  componentDidMount(){
    const {storyId}  = this.props;
    GetStory(storyId).then((res) => {
      if (res){
        this.setState({ story: res, loading: true });
      }
    }).catch(() => {
      this.setState({ loading: false });
    });
  }

  onLoadStoryTime = (time) => {
    alert("loaded")
    console.log(time)
  }

  render() {
    return (
      <div className="new_story">
        <div>
          <label className="new_story_tittle"><b>{this.state.story.title}</b></label>
        </div>
        <div>
          <a href={this.state.story.url} style={{display: "table-cell"}} target="_blank">Full Story</a>
          <br/>
          <div style={{ display: "flex", marginBottom: "10px", marginTop: "50px" }}>
            <div className="new_story_by" >
              {this.state.story.by}<br/>
              <span onLoad={() => this.onLoadStoryTime(this.state.story.time)}>{this.state.story.time}</span>
            </div>
            <div className="score"><i className="fa fa-heart">&nbsp;{this.state.story.score}</i></div>
          </div>
        </div>
      </div>
    )
  }
}
export default Story;