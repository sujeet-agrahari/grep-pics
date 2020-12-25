import React from "react";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = ({ target }) => {
    this.setState(
      {
        searchText: target.value,
      },
      () => this.props.onChange(this.state.searchText)
    );
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchText);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              type="text"
              placeholder="Search image"
              value={this.state.searchText}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
