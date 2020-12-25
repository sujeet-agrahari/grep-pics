import React from 'react';
import unsplash from '../api/unsplash.api';
import GridLoader from './loader/grid-loader.component'
import SearchBox from './search-box/search-box.component';
import ImageList from './image-list/image-list.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      images: [],
    }
  }
  handleSearchSubmit = async (searchText) => {
    const response = await unsplash.get('/search/photos?per_page=20', {
      params: {
        query: searchText,
      },

    })
    this.setState({
      loading: false,
      images: response.data.results,
    })
  }

  handleInputChange = (searchText) => {
    if (searchText.length > 0) {
      this.setState({
        loading: true,
      })
    } else {
      this.setState({
        loading: false,
      })
    }
  }
  render() {
    return (
      <div className="ui container" style={{
        marginTop: "10px"
      }}>
        <SearchBox onSubmit={this.handleSearchSubmit} onChange={this.handleInputChange} />
        { this.state.loading ? <GridLoader /> : <ImageList images={this.state.images} />}
      </div>
    );
  }
}


export default App;
