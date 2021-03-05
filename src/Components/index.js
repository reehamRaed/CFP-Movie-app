import React ,{useEffect , useState}  from 'react'

import SearchBox from './SearchBox'

import MovieCard from './movie-card'


function Main() {

const [movies , setMovies] = useState([])

  const getSearchText =(text)=>{

    getMovies(text)

  }
 
    //fetch
    const getMovies =(query)=>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=fae307ea11f81601869060a702f76dfc&query=${query}`)
        .then(res => res.json())
        .then((res)=>{
            setMovies(res.results)
        })
    }

  return(
<div>
  <SearchBox getSearchText={getSearchText}/>

{movies.map((movie)=><MovieCard data={movie}/>)}

</div>
  )
}

export default Main
