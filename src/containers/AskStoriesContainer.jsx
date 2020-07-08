import React, { useState, useEffect } from 'react';
import {GetAskStories} from '../config/api'
import Story from '../components/Story'
import Paginator from 'react-hooks-paginator';
import '../stylesheets/StoriesContainer.css'

function AskStoriesContainer() {

  const pageLimit = 25,
    [askstories, setaskstories] = useState([]),
    [loading, setloading] = useState(false),
    [offset, setOffset] = useState(0),
    [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    GetAskStories().then((res) => {
      setaskstories(res.slice(offset, offset + pageLimit));
      setloading(true);
    }).catch(() => {
      setloading(false);
    });
  });

  return (
    <>
    { loading &&
      <>
        <div className="ask_stories" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "95px" }}>
          {askstories.map(storyId =>(<Story key={storyId} storyId={storyId} />))}
        </div>
        <div>
          <Paginator
            totalRecords={askstories.length}
            pageLimit={pageLimit}
            pageNeighbours={1}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageActiveClass={"active"}
            pageContainerClass={"react-hooks-paginator"}
            pagePrevText={"prev"}
            pageNextText={"next"}
            pageItemClass={"page-item"}
            pageLinkClass={"page-link"}
            pagePrevClass={"page-link"}
            pageNextClass={"next-link"}
          />
        </div>
      </>
    }
    </>
  );
}
export default AskStoriesContainer;