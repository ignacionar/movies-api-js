const app = document.querySelector(".app");

app.innerHTML = `

<div class="div_title">
    <h1 class="title">Movies & Series</h1>
</div>

<div class="div_form">

    <form action="" id="form">
        <input type="text" name="" id="input" placeholder="Write here...">
        <button>Search!</button>

        <div id="result" class="hid">
        
        </div>
    </form>
</div>
`

// SELECTORS
const input = document.getElementById("input");
const form = document.querySelector("#form")
const btn = document.querySelector("button");
const result = document.querySelector("#result");

const API_URL1 = "http://www.omdbapi.com/?t=";
const API_URL2 = "&apikey=1a85078b";

const searchMovies = async (value) => {
    
    const res = await fetch(`${API_URL1}${value}${API_URL2}`);
    const data = await res.json();
    console.log(data);

    if (data.Response == "False") {
        return;
    } else {

        result.className = "nothid"
        result.innerHTML = `
        <ul class="">
        <li id="tit">${data.Title}</li>

        <li>Genres: ${data.Genre}</li>

        <li>Classification: ${data.Rated}</li>

        <li>Rating: ${data.imdbRating}</li>

        <li>Type: ${data.Type}</li>

        </ul>
        <img id="image" src="${data.Poster}">
        `;
    }
}

function init() {

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const searchValue = input.value
        searchMovies(searchValue);

    });

}

init()