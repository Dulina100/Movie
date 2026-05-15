console.log("js loaded!!")

let browseBtn = document.getElementById("browse btn");
       browseBtn.addEventListener("click",()=>{

           window.location.href = "browse.html";

       });

let apikey="f56e9cff";

let movie= document.getElementById("txt_movie");

movie.addEventListener("keypress",e =>{
         if(e.key=="Enter"){
            apiCall(movie.value)
         }
})

let apiCall =  async (movie) => {
       await fetch(`https://www.omdbapi.com/?s=${movie}&apikey=${apikey}`)
      .then(res=>res.json())
      .then(data=>{
           setMovie(data.Search[0]);
      })
} 

let setMovie =(data)=>{
       let poster=document.getElementById("poster");
       let title=document.getElementById("Intesteller");
       let year=document.getElementById("2014");
       let genre=document.getElementById("Science");
       let imdb=document.getElementById("imdb")
       let director=document.getElementById("director");
       let actors=document.getElementById("actors");
       let plot=document.getElementById("plot");
       let imdb_rating=document.getElementById("imdb_rating");

       poster.src=data.Poster;
       title.innerText= data.Title;
       year.innerText= data.Year;
       genre.innerText= data.Type;
       imdb.innerText=data.imdbID;

       

    //    director.innerText= data.
    //    actors.innerText= data.
    //    plot.innerText= data.
    //    imdb_rating.innerText= data.

}