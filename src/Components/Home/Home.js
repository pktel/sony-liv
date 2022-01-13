import axios from 'axios';
import React, { Component } from 'react'
import Imageslick from '../Slider/Imageslick';
import Slider from 'react-slick';

import Cards from '../Common/Cards'
import './home.css'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            error: "",
            dataLoaded: false,
            loading: true

        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
        axios.get("https://api.tvmaze.com/shows")
            .then(response => {
                console.log(response.data)
                this.setState({ posts: response.data })
                this.setState({ dataLoaded: true })
                this.setState({ loading: false })
            })
            .catch(error => {
                this.setState({ error: "Endpoint is not correct" })

            })
    }

    render() {
        const { posts, dataLoaded, error } = this.state;
        const settings = {
            infinite: true,
            speed: 1000,
            slidesToShow: 9,
            slidesToScroll: 8,
            responsive: [
                {
                    breakpoint: 1040,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                }
            ]
        };



        return (
            <div style={{ maxWidth: '100%' }}>

                <Imageslick />
                <>
                    <div>

                        <div className="row m-3">
                            <h2 className='titleName'>
                                <Link to="/tvShows" style={{ color: "#fff", textDecoration: "none" }}>Premium Preview - Originals  <i className="fas fa-chevron-right" style={{ color: '#fff', marginLeft: "5px", fontSize: "1em" }} aria-hidden="true" /></Link></h2>
                            {this.state.loading && <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span></div>
                            </div>}
                            <Slider {...settings}>
                                {dataLoaded ? posts.map((item, index) =>
                                    <div className="col-6 col-md-2 col-sm-2 imageStyle">
                                        <Cards key={index} data={item} />
                                    </div>) : <div className="error">{error}</div>}
                            </Slider>
                        </div>
                    </div>
                    <div>
                        <div className="row m-3">
                            <h2 className='titleName'>
                                <Link to="/tvShows" style={{ color: "#fff", textDecoration: "none" }}> TV Shows  <i className="fas fa-chevron-right" style={{ color: '#fff', marginLeft: "5px", fontSize: "1em" }} aria-hidden="true" /></Link>
                            </h2>

                            {this.state.loading && <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span></div>
                            </div>}
                            <Slider {...settings}>
                                {dataLoaded ? posts.map((item, index) =>
                                    <div className="col-6 col-md-2 col-sm-2 imageStyle">
                                        <Cards key={index} data={item} />
                                    </div>) : <div className="error">{error}</div>}
                            </Slider>
                        </div>
                    </div>
                    <div>
                        <div className="row m-3">

                            <h2 className='titleName'>
                                <Link to="/tvShows" style={{ color: "#fff", textDecoration: "none" }}>Sports  <i className="fas fa-chevron-right" style={{ color: '#fff', marginLeft: "5px", fontSize: "1em" }} aria-hidden="true" /></Link>
                            </h2>

                            {this.state.loading && <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span></div>
                            </div>}
                            <Slider {...settings}>
                                {dataLoaded ? posts.map((item, index) =>
                                    <div className="col-6 col-md-2 col-sm-2 imageStyle">
                                        <Cards key={index} data={item} />
                                    </div>) : <div className="error">{error}</div>}
                            </Slider>
                        </div>
                    </div>
                    <div>
                        <div className="row m-3">
                            <h2 className='titleName'>
                                <Link to="/tvShows" style={{ color: "#fff", textDecoration: "none" }}>Movies  <i className="fas fa-chevron-right" style={{ color: '#fff', marginLeft: "5px", fontSize: "1em" }} aria-hidden="true" /></Link>
                            </h2>

                            {this.state.loading && <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span></div>
                            </div>}
                            <Slider {...settings}>
                                {dataLoaded ? posts.map((item, index) =>
                                    <div className="col-6 col-md-2 col-sm-2 imageStyle">
                                        <Cards key={index} data={item} />
                                    </div>) : <div className="error">{error}</div>}
                            </Slider>
                        </div>
                    </div>
                    <div>
                        <div className="row m-3">
                            <h2 className='titleName'>
                                <Link to="/tvShows" style={{ color: "#fff", textDecoration: "none" }}>Games  <i className="fas fa-chevron-right" style={{ color: '#fff', marginLeft: "5px", fontSize: "1em" }} aria-hidden="true" /></Link>
                            </h2>

                            {this.state.loading && <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span></div>
                            </div>}
                            <Slider {...settings}>
                                {dataLoaded ? posts.map((item, index) =>
                                    <div className="col-6 col-md-2 col-sm-2 imageStyle">
                                        <Cards key={index} data={item} />
                                    </div>) : <div className="error">{error}</div>}
                            </Slider>
                        </div>
                    </div>
                </>
            </div>
        )
    }
}

