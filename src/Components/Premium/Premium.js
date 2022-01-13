import axios from 'axios'
import React, { Component } from 'react'

import Cards from '../Common/Cards';


import './premium.css'
import uparrow from '../../Assets/Images/uparrow.png'


export default class TvShows extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            error: "",
            dataLoaded: false,
            limit: 24
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.scrollTop = this.scrollTop.bind(this)

    }
    scrollTop = () => {
        window.scrollTo({
            top: 0,
            })

    }





    /*Load more pictures on click of show more -- Vertical Pagination */
    clickHandler() {
        this.setState({
            limit: this.state.limit + 24

        });
    }


    componentDidMount() {
        axios.get("https://api.tvmaze.com/shows?page=2")
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
        const { posts, dataLoaded, error, limit } = this.state;
        return (
            <>
                <div style={{ borderRadius: '10px', paddingTop: "50px" }}>
                    <div className="row m-5">
                        <h1 style={{ color: "white", padding: "5px" }}>Premium</h1>
                        {dataLoaded ? posts.map((item, index) =>
                            (index < limit) &&
                            <div className="col-6 col-md-2 col-sm-2 cardLayout container-fluid">
                                <Cards key={index} data={item} />
                            </div>) : <div className="error">{error}</div>
                        }
                    </div>
                    <div className="container">
                        {limit >= posts.length ? <h2 className="text-center" style={{ color: "White" }}>You reached to end of the page</h2> :

                            <button type="button" className="btn btn-secondary showmore" onClick={this.clickHandler}>Show more</button>
                        }
                        <button onClick={this.scrollTop} className="go-top backtotop" ><img src={uparrow} id='uparrow' alt='uparrow-symbol' /> </button>
                    </div>

                </div>

            </>
        )
    }





}
