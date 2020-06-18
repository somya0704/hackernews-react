import React, { Component } from 'react'
import {GetNewStories} from '../config/api'
import Story from '../components/Story'
import ReactPaginate from 'react-paginate';
import '../stylesheets/StoriesContainer.css'

class NewStoriesContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newstories: [],
      loading: false,
      offset: 0,
      perPage: 25,
      currentPage: 0
    }
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  receivedNewStories() {
    GetNewStories().then((res) => {
      const slice = res.slice(this.state.offset, this.state.offset + this.state.perPage)
      this.setState({ newstories: slice, loading: true, pageCount: Math.ceil(res.length / this.state.perPage) });
    }).catch(() => {
      this.setState({ loading: false });
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({currentPage: selectedPage, offset: offset}, () => {this.receivedNewStories()});
  };

  componentDidMount() {
    this.receivedNewStories()
  }

  render() {
    return (
      <div>
        <div className="new_stories" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "95px" }}>
          {this.state.newstories.map(storyId =>(<Story key={storyId} storyId={storyId} />))}
        </div>
        <div>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}/>
        </div>
      </div>
    );
  }
}
export default NewStoriesContainer;

