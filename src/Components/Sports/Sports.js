// import React, { Component } from 'react'
import React from 'react'
import { useState, useEffect } from 'react'
import './sports.css'





export default function Sports() {
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false)
    const [Data, setData] = useState([]);
    const [showItems, setShowItems] = useState(60);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows?page=1`)
            .then(res => res.json())
            .then(data => { setData(data) })
            .catch(error => console.log(error))

    }, [])
    const scrollToEnd = () => {
        if (showItems >= Data.length) {
            setMessage(true)
        }
        else {
            setLoading(true)
            setTimeout(() => {
                setShowItems(showItems + 60)
                setLoading(false);
            }, 2000);
        }
    }
    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            scrollToEnd();
        }
    }
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <div>
            <div style={{ paddingTop: "100px" }}>
                <div className="row p-2 main" id="tvshows">
                    <h1 style={{ color: "white", padding: "10px" }}>Sports</h1>
                    {Data.slice(0, showItems).map((eachItem) => {
                        return (<div className="col-6 col-sm-3 col-md-2" id={eachItem.id}>
                            <div className="card mb-3 bg-dark  text-center">
                                <a href={eachItem.url} style={{ textDecoration: "none" }}>
                                    <div>
                                        <img src={eachItem.image.medium} alt={"pic"} style={{ width: "100%", height: "50%" }} alt={eachItem.name} className="card-img-top" />
                                    </div>
                                </a>
                            </div>
                        </div>)
                    })
                    }
                    <div className="row d-flex flex-row">
                        {message && <h4 style={{ color: "white", textAlign: "center" }}>You reached bottom of the page.......!</h4>}
                        {visible && <i onClick={scrollToTop} class="fa fa-arrow-circle-up" style={{ fontSize: "48px", color: "red", textAlign: "right" }}></i>}
                        {loading &&
                        <div className="d-flex flex-row justify-content-center">
                            <div class="spinner-grow text-success m-2" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-success m-2" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <div class="spinner-grow text-success m-2" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}


