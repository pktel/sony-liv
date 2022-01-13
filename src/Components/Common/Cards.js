import React from 'react'
import './cards.css'
export default function Cards({data}) {
    return (
        <div className="card h-100 bg-dark">
            <img src={data.image.medium} className="card-img" alt={data.name} />
           <span className="toolTip">Tittle:{data.name}<br/> Language:{data.language}<br/>Genre:{data.genres.map(item=>" "+item+"|")}<br/>Ratings:{data.rating.average}<br/>Duration:{data.runtime}minutes<br/>Release Date:{data.premiered}
            </span> 
        
    </div>
    )
}