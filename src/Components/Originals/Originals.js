import axios from 'axios'
import React, { Component } from 'react'

import Cards from '../Common/Cards';
import './originals.css'
import uparrow from '../../Assets/Images/uparrow.png'

export default class Originals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            error: "",
            dataLoaded: false,
            limit: 60,
            dataLength: null
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
            limit: this.state.limit + this.state.dataLength / 4

        });
        console.log("Limit", this.state.limit)
    }


    componentDidMount() {
        axios.get("https://api.tvmaze.com/shows")
            .then(response => {
                console.log(response.data)
                console.log(response.data.length)
                this.setState({ dataLength: response.data.length })
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

                <div className='main'>
                    <h3 className='d-flex justify-content-start title'>Originals</h3>
                    <div className="row m-4">
                        {dataLoaded ? posts.map((item, index) =>
                            (index < limit) &&
                            <div className="col-6 col-md-2 col-sm-2 cardLayout container-fluid">
                                <Cards key={index} data={item} />
                            </div>) : <div className="error">{error}</div>
                        }
                    </div>
                    <div className="container">

                        {limit >= posts.length ?
                            <h2 className="text-center" style={{ color: "White" }}>You reached to end of the page</h2> :
                            <button type="button" className="btn btn-primary showmore" onClick={this.clickHandler}>Show more</button>
                        }
                        <button onClick={this.scrollTop} className="go-top backtotop" ><img src={uparrow} id='uparrow' alt='uparrow-symbol' /> </button>
                    </div>

                </div>

            </>
        )
    }
}

