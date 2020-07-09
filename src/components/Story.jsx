import React, { useState, useEffect } from 'react'
import {GetStory} from '../config/api'
import '../stylesheets/Story.css'


function Story(props) {

  const [story, setstory] = useState([]),
    [loading, setloading] = useState(false);

  useEffect(() => {
    GetStory(props.storyId).then((res) => {
      if (res){
        setstory(res);
        setloading(true);
      }
    }).catch(() => {
      setloading(false);
    });
  });

  return (
    <>
      { loading &&
        <>
        <div className="new_story">
          <div>
            <label className="new_story_tittle"><b>{story.title}</b></label>
          </div>
          <div>
            <a href={story.url} style={{display: "table-cell"}} target="_blank">Full Story</a>
            <br/>
            <div style={{ display: "flex", marginBottom: "10px", marginTop: "50px" }}>
              <div className="new_story_by" >
                {story.by}<br/>
                <span>{story.time}</span>
              </div>
              <div className="score"><i className="fa fa-heart">&nbsp;{story.score}</i></div>
            </div>
          </div>
        </div>
        </>
      }
    </>
  )
}
export default Story;