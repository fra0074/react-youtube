import React, { Component } from 'react';

class SearchBar extends Component {


    constructor(props) {
        super(props);
        this.state = { term: ''};
    }



    // onInputChange = (event) => {
    //     console.log(event.target.value);
    // }

    render() {
        return (

          <div className="search-bar">
            <input type="text"
                   value={this.state.term} //controlled components
                   // placeholder={this.props.initialValue}
                   onChange={ (event) => this.onInputChange(event.target.value) }/>

            <p><span className="red-color">Value of the input: </span> {this.state.term} </p>
          </div>

        );
    }


   onInputChange = (term) => {
      console.log(term);
      this.setState({term});
      this.props.onSearchTearmChange(term);
    }


}





export default SearchBar;

