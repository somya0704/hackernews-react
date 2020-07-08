import React, { useState, useEffect } from 'react';
import {GetJobStories} from '../config/api'
import Story from '../components/Story'
import Paginator from 'react-hooks-paginator';
import '../stylesheets/StoriesContainer.css'

function JobtoriesContainer() {

  const pageLimit = 25,
    [jobstories, setjobstories] = useState([]),
    [loading, setloading] = useState(false),
    [offset, setOffset] = useState(0),
    [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    GetJobStories().then((res) => {
      setjobstories(res.slice(offset, offset + pageLimit));
      setloading(true);
    }).catch(() => {
      setloading(false);
    });
  });

  return (
    <>
      { loading &&
        <>
          <div className="job_stories" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "95px" }}>
            {jobstories.map(storyId =>(<Story key={storyId} storyId={storyId} />))}
          </div>
          <div>
            <Paginator
            totalRecords={jobstories.length}
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
export default JobtoriesContainer;
