//You can edit ALL of the code here
// Global variable
let dropDown = document.getElementById("listEpisode");

const rootElem = document.getElementById("root");

const container = document.getElementById("container");
let searchInput = document.getElementById("searchInput");
let searchResult = document.getElementById("searcResult");
const selectShowTag = document.getElementById("selectShow");

let epCount = 0;
let allEpisodes = [];
let allShows = getAllShows();

// add a  new drop for list of shows
// fill it with the dATTA THAT COME FORM GET ALL SHOWS
// let allShow = getShow();

const apiEps = "https://api.tvmaze.com/shows/82/episodes";

function fetchEpisodes(showID = 82) {
  fetch(`https://api.tvmaze.com/shows/${showID}/episodes`)
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
      createShowsDropdown(allShows);
      createShowCards(shows);
    });
}

// fetchData(apiUrl);

function setup() {
  // allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  selectDropDown(allEpisodes);
}

// level 100
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
  // let allEpisode = document.querySelectorAll("#container div");
  // allEpisode.forEach((episode) => {
  //   if (episode.innerHTML.toLowerCase().includes(searchInput.toLowerCase())) {
  //     episode.style.display = "block";
  //     epCount++;
  //   } else {
  //     episode.style.display = "none";
  //   }
  // });
  const filterListOfEpisode = allEpisodes.filter((episode) => {
    return episode.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  makePageForEpisodes(filterListOfEpisode);

  searchResult.innerHTML = `${filterListOfEpisode.length} of ${allEpisodes.length} available show`;
});

function selectDropDown(episodes) {
  // let dropDown = document.getElementById("listEpisode");
  dropDown.innerHTML = "";
  episodes.forEach((episode) => {
    const option = document.createElement("option");
    option.value = episode.name;
    option.text = ` S${(episode.season + "").padStart(2, "0")}  E${(
      episode.number + ""
    ).padStart(2, "0")} ${episode.name}`;
    dropDown.appendChild(option);
  });
}

function createShowsDropdown(shows) {
  let dropDown = document.getElementById("listShows");
  dropDown.addEventListener("change", (event) => {
    const selectedShowId = event.target.value;

    console.log("dropDown", event, selectedShowId);
    fetchEpisodes(selectedShowId);
  });

  dropDown.innerHTML = "";
  shows.forEach((show) => {
    const option = document.createElement("option");
    option.value = show.id;
    option.text = show.name;
    dropDown.appendChild(option);
  });
}

function createShowCards(shows) {
  let cardsContainer = document.getElementById("show-cards");
  cardsContainer.innerHTML = shows.map((show) => {
    return `<div class="show-card">
  <h2> ${show.name}</h2>
  <div class="show-summary"> ${show.summary}</div>
  <img src=" ${show.image.medium}"/>
  <div class="genreElement">${show.genres} </div>
  <div class="status">${show.status} </div>
  <div class="runtime">${show.runtime} </div>
  <div class="rating"> ${show.rating.avarage} </div>
  


</div>`;
  });
}

function displayAllShows(arr) {
  document.getElementById("root").innerHTML = "";
  arr.forEach((element) => {
    displayAllShows(element);
  });
}

//!!!1next time display the episode we just fetch
let displaySelectEpisode = document.getElementById("listEpisode");
console.log(displaySelectEpisode);
console.log(dropDown);
dropDown.addEventListener("onchange", () => {
  let selectedValue = dropDown.value;
  const filterValue = allEpisodes.filter((show) => {
    return show.name.includes(selectedValue);
  });
  makePageForEpisodes(filterValue);
});

// window.onload = fetchEpisodes ( );
window.onload = fetchShows();
