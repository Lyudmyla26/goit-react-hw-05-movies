export const DetailsMovie= ({details })=>{
    const posterUrl = 'https://image.tmdb.org/t/p/original/'
    return(
        <>
       <img src={ `${posterUrl}${details.poster}` } alt={details.title} />
       <h2>{details.title}</h2>
       <p>User Score: {details.votes}</p>
       <h3>Overview</h3>
       <p>{details.overview}</p>
       <h2>Genres</h2>
       <p>{details.genres}</p>
       <p>{details.country}</p>
       <hr />
       <p>Additional Information</p>
        </>
    )
}