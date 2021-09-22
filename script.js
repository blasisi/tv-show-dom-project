//You can edit ALL of the code here
// Gloval variable
// let dropDown = document.getElementById("listEpisodes");

const rootElem = document.getElementById("root");

const container = document.getElementById("container");
let searchInput = document.getElementById("searchInput");
let searchResult = document.getElementById("ResultSearch");
const selectShowTag =document.getElementById("selectShow");
let epCount = 0;
let allEpisodes = [];
let allShows = getAllShows();

// add a  new drop for list of shows
// fill it with the dATTA THAT COME FORM GET ALL SHOWS 
// let allShow = getShow();

const apiEps = "https://api.tvmaze.com/shows/82/episodes";


function fetchEpisodes() {
  fetch(apiEps)
    .then((response) => response.json())
      
    .then((episode) => {
      allEpisodes = episode;
      setup();
    });
}

function fetchShows() {

  fetch(" https://api.tvmaze.com/shows")
    .then((response) => response.json())
      
    .then((shows) => {
      allShows = shows;
      selectShows(allShows);
    })
    
}



// fetchData(apiUrl);

function setup() {
  allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  selectDropDown(allEpisodes);
}

// level
const heading = document.createElement("h1");
const image = document.createElement("img");
const epSeason = document.createElement("p");
const summary = document.createElement("div");

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";
  //  const epCount = document.createElement("div");
  //  epCount.classList.add("episode_count");

  // epCount.textContent = `Got ${episodeList.length} episode(s)`;
  // rootElem.append(epCount);

  episodeList.forEach((title) => {
    const movieCard = document.createElement("div");

    const heading = document.createElement("h1");
    heading.innerText = title.name;
    const image = document.createElement("img");
    image.src = title.image.medium;

    const epCode = document.createElement("p");
    epCode.innerText = `S${title.season
      .toString()
      .padStart(2, 0)} E${title.number.toString().padStart(2, 0)}`;
    // padStrart is to number= 01, parseInt from string to number.
    //level
    const summary = document.createElement("div");
    summary.innerHTML = title.summary;
    movieCard.append(heading, image, epSeason, summary);
    rootElem.append(movieCard);

    //  combine season number and episode number into an episode code:

    // Your page should state somewhere that the data has (originally) come from TVMaze.com, and link back to that site (or the specific episode on that site). See tvmaze.com/api#licensing.
  });
  //level 300
}

function search(input) {
  let allInput = allEpisodes.filter((episode) => {
    return (
      episode.name.toLowerCase().includes(input.toLowerCase()) ||
      episode.summary.toLowerCase().includes(input.toLowerCase())
    );
  });

  makePageForEpisodes(allInput);
}
function zeropadded(epCode) {
  return epCode.toString().padStart(2, 0);
}

searchInput.addEventListener("input", (event) => {
  searchInput = event.target.value;
  epCount = 0;
  console.log(searchInput);
  let allEpisode = document.querySelectorAll("#container div");
  allEpisode.forEach((episode) => {
    if (episodes.innerHTML.toLowerCase().includes(searchInput.toLowerCase())) {
      episode.style.display = "block";
      epCount++;
    } else {
      episodes.style.display = "none";
    }
  });
  searchResult.innerHTML = `${epCount} of ${allEpisodes.length} available show`;
});

function selectDropDown(episodes) {
  let dropDown = document.getElementById("listEpisode");
  dropDown.innerHTML = "";
  episodes.forEach((episode) => {
    const option = document.createElement("option");
    option.value = episode.name;
    option.text = episode.name;
    dropDown.appendChild(option);
  });
}

function selectShows(shows) {
  let dropDown = document.getElementById("listShows");
  dropDown.innerHTML = "";
  shows.forEach((show) => {
    const option = document.createElement("option");
    option.value = show.name;
    option.text = show.name;
    dropDown.appendChild(option);
  });
}
//level 400 add a show selector

window.onload = fetchEpisodes ( );
window.onload = fetchShows();

