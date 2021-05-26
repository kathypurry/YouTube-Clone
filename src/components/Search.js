import React, { Component } from "react";

class Search extends Component {
    state = {
        title: "",
    }

    onChanged = e => {

        const _title = e.target.value
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
