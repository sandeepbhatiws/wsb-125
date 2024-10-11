const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


// function moviesData(url){
//     const moviesData = fetch(url).then((response) => {
//         var data = response.json();
//         data.then((response) => {
//             displayData(response.results)
//         })
//     }).catch((error) => {
//     });
// }

const moviesData = async (url) => {
    var moviesData = await fetch(url);
    var moviesData = await moviesData.json();
    displayData(moviesData.results)
}

moviesData(APIURL);

function displayData(movies){
    var data = '';
    movies.forEach((movie,index) => {
        data += `<div class="box">
                <img src="${IMGPATH}${movie.poster_path}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${movie.original_title} </h2>
                        <span> ${movie.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                    ${movie.overview}
                    </p>
                </div>
            </div>`;
    })

    document.getElementById('movie-box').innerHTML = data;
    
}



document.getElementById('search').addEventListener('keyup',(event) => {
    if(event.target.value != ''){
        var url = SEARCHAPI+event.target.value;
        moviesData(url);
    } else {
        moviesData(APIURL);
    }
    
})