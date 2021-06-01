import React, { Component } from "react";

class Search extends Component {
    /*
    Great demonstration of getting and setting state in a Class component
    in response to user input!
    */
    state = {
        title: "",
    }

    // Excellent use of onChanged and onSubmit functions to handle user input and update the UI
    onChanged = e => {
        const _title = e.target.value //Again, consistently formatted code is low-hanging fruit to make your code more legible!
        console.log(_title)
        this.setState({title:_title})
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.onSearch(this.state.title)
        this.setState({
            title: "",
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="forms">

                        <input
                            value={this.state.title}
                            onChange={this.onChanged}
                            type="text"
                            placeholder="Search"
                        />

                    </div>
                </form>
            </div>
        )
    }
}

export default Search;
