import React, { Component } from 'react'
import {GetAskStories} from '../config/api'
import Story from '../components/Story'
import ReactPaginate from 'react-paginate';
import '../stylesheets/StoriesContainer.css'

class AskStoriesContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      askstories: [],
      loading: false,
      offset: 0,
      perPage: 25,
      currentPage: 0
    }
  }

  receivedAskStories() {
    GetAskStories().then((res) => {
      const slice = res.slice(this.state.offset, this.state.offset + this.state.perPage)
      this.setState({ askstories: slice, loading: true, pageCount: Math.ceil(res.length / this.state.perPage) });
    }).catch(() => {
      this.setState({ loading: false });
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({currentPage: selectedPage, offset: offset}, () => {this.receivedAskStories()});
  };

  componentDidMount() {
    this.receivedAskStories()
  }

  render() {
    return (
      <>
        <div className="ask_stories" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "95px" }}>
          {this.state.askstories.map(storyId =>(<Story key={storyId} storyId={storyId} />))}
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
      </>
    );
  }
}
export default AskStoriesContainer;