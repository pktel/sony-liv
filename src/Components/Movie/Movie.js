import axios from 'axios'
import React, { Component } from 'react'

import Cards from '../Common/Cards';

export default class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            error: "",
            dataLoaded: false
        }
    }

    componentDidMount() {
        axios.get("https://api.tvmaze.com/shows")
            .then(response => {
                console.log(response.data)
                this.setState({ posts: response.data })
                this.setState({ dataLoaded: true })
            })
            .catch(error => {
                this.setState({ error: "Endpoint is not correct" })

            })
    }

    render() {
        const { posts, dataLoaded, error } = this.state;
        return (
            <>
                <div style={{ backgroundColor: "inherit", padding: "50px" }}></div>
                <div style={{ borderRadius: '10px' }}>
                    <h3 style={{ color: "#fff", marginLeft: "70px" }}>TV SHOWS</h3>
                    <div className="row m-5">
                        {dataLoaded ? posts.map((item, index) =>
                            <div className="col-6 col-md-2 col-sm-2 cardLayout container-fluid">
                                <Cards key={index} data={item} />
                            </div>) : <div className="error">{error}</div>
                        }
                    </div>
                </div>
            </>
        )
    }
}

