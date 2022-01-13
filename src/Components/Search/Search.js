import React from 'react'
import { Link } from 'react-router-dom'
import './search.css'
import { useState, useEffect } from 'react';

// import React, { Component } from 'react'

// export default class search extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             dataList: [],
//             searchText: "",
//             newData: this.state.dataList
//         }

//     }

//     handleChange = event => {
//         this.setState({newData : this.state.dataList})
//         this.setState({searchText: event.target.value})
//         const { dataList,newData } = this.state
//         console.log(event.target.value)
//         if (event.target.value === "") {
//             this.setState({ newData: dataList })
//         }
//         else {
//             const filteredData = dataList.filter(each => {console.log(event.target.value); return(each.name.toLowerCase().includes(event.target.value.toLowerCase()))})
//             this.setState({ newData: filteredData })
//             console.log(this.state.newData)
//         }
//     };

//     componentDidMount() {
//         fetch('https://api.tvmaze.com/shows')
//             .then(res => res.json())
//             .then(data => this.setState({ dataList: data }))
//             .catch(error => console.log(error))
//     }

//     render() {
//         return (
//             <div>
//                 <div className="text-center margin-for-div-top d-flex">
//                     <div className="search-bar-wrapper">
//                         <input type="search" className="MobileInputSearch" placeholder="Type to search..."
//                             value={this.state.searchText}
//                             onChange={(e) => this.handleChange(e)} />
//                     </div>
//                     <div>
//                         <Link to="/"><img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19'%3e%3cpath d='M18.075 1L1 18.075M1 1l17.075 17.075' stroke='%23FFF' stroke-width='1.647' fill='none' stroke-linecap='round' stroke-linejoin='round' opacity='.8'/%3e%3c/svg%3e" class="close-icon close-search-icon" alt="close" /></Link>
//                     </div>
//                 </div>
//                 <div>
//                     <div style={{ paddingTop: "100px" }}>
//                         <div className="row p-2 main" id="tvshows">
//                             <h1 style={{ color: "white", padding: "10px" }}>Movie</h1>
//                             {this.state.newData.map((eachItem, i) => {
//                                 return (
//                                     <div className="col-6 col-sm-3 col-md-2" key={i}>
//                                         <div className="card mb-3 bg-dark  text-center">
//                                             <a href={eachItem.url} style={{ textDecoration: "none" }}>
//                                                 <div>
//                                                     <img src={eachItem.image.medium} alt={"pic"} style={{ width: "100%" }} className="card-img-top" />
//                                                 </div>
//                                                 {/* <p>{eachItem.name}</p> */}
//                                             </a>
//                                         </div>
//                                     </div>

//                                 )
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         )
//     }
// }

export default function Search() {
    const [fetchData, setfetchData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [newData, setnewData] = useState([])

    useEffect(() => {

        fetch('https://api.tvmaze.com/shows')
            .then(res => res.json())
            .then(data => { setnewData(data); setfetchData(data) })
            .catch(error => console.log(error))
    }, [])
    // handle change event of search input
    const handleChange = value => {
        setSearchText(value);
        console.log(value)
        filterData(value);
    };

    // filter records by search text
    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase();
        if (lowercasedValue === "") {
            setnewData(fetchData)
            console.log(newData);
        }
        else {
            console.log(lowercasedValue)
            const filteredData = fetchData.filter(each => {
                return (each.name.toLowerCase().replace(/ +/g, "").includes(lowercasedValue.replace(/ +/g, "").toLowerCase()))
            });
            console.log(filteredData)
            setnewData(filteredData)
        }
    }
    return (
        <div>
            <div className="margin-for-div-top d-flex flex-column justify-content-start">
                <div className="d-flex flex-row justify-content-end"> 
                    <Link to="/"><img style={{paddingRight: "30px"}} src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19'%3e%3cpath d='M18.075 1L1 18.075M1 1l17.075 17.075' stroke='%23FFF' stroke-width='1.647' fill='none' stroke-linecap='round' stroke-linejoin='round' opacity='.8'/%3e%3c/svg%3e" class="close-icon close-search-icon" alt="close" /></Link>
                </div>
                <div className="search-bar-wrapper text-center">
                    <input type="search" placeholder="Search for movies, shows, sports etc."
                        value={searchText}
                        onChange={e => handleChange(e.target.value)}
                        className="MobileInputSearch" />
                </div>
            </div>
            <div>
                {newData.length === 0 &&
                    <div className="no-found">
                        <img src="https://origin-staticv2.sonyliv.com/UI_icons/paymentscreenicons/no_result.png" style={{ width: "20%" }} />
                        <p> Sorry! Couldn’t find any results matching  "{searchText}"</p>
                    </div>
                }
                <div>
                    <div className="row p-1" id="tvshows">
                        <h1 style={{ color: "white", padding: "10px" }}>Movies</h1>
                        {newData.map((eachItem, i) => {
                            return (
                                (<div className="col-6 col-sm-3 col-md-2" key={i}>
                                    <div className="card mb-3 bg-dark  text-center">
                                        <a href={eachItem.url} style={{ textDecoration: "none" }}>
                                            <div>
                                                <img src={eachItem.image.medium} alt={"pic"} style={{ width: "100%", height: "50%", borderRadius: "10px" }} className="card-img-top" />
                                            </div>
                                        </a>
                                    </div>
                                </div>)

                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}
