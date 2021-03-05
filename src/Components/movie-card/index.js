import React from 'react'

import DummyImage from '../../assets/images/Dummy-image-1.jpg'
import './index.css'

export default function Card({data}) {

    return(
        <div className='card-wrapper'>
            <div className='left-side'>
             <img src={`http://image.tmdb.org/t/p/w185/${data.poster_path}`}/>
            </div>
            <div className='right-side'>
                <h2>{data.original_title}</h2>
                <p>{data.release_date}</p>
                <p>rate : {data.vote_average}</p>
                <p>
                    {data.overview}
                </p>

            </div>
     
            

        </div>
    )
    
}

