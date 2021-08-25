import React from 'react'


export default class Search extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            search: "",
        };
        this.handleSearch = this.handleSearch.bind(this);

    }
    
    handleSearch(e) {
        this.props.onSearch(e.currentTarget.value);

        this.setState({
            search: e.currentTarget.value
        })


    }

    render() {
        return (
            <div>
                <input type="text"
                    value={this.state.search}
                    onChange={this.handleSearch}
                    placeholder="Search Link.."
                />
            </div>
        )
    }
}
