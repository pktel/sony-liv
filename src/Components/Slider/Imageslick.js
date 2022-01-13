import React, { Component } from "react";
import Slider from "react-slick";

import ImageData from './ImageData';
import './Imageslick.css';


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 4000,
            autoplay: true,
        };
        return (
            <div>
                <Slider {...settings}>
                    {ImageData.map(eachData => <img src={eachData.url} alt="Pictures" className="imageTop" />)}
                </Slider>
            </div>
        );
    }
}