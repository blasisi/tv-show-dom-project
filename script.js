//You can edit ALL of the code here
// Gloval variable
let dropDown = document.getElementById("listEpisodes");
const rootElem = document.getElementById("root");
let allEpisodes = [];

// const container = document.getElementById("container");
// const option = document.getCreateElement("option");
// let searchInput = document.getElementById("SearchInput");
// let searchResult = document.getElementById("ResultSearch");


function setup() {
   allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  let allShows =getAllShows().sort((a,b) =>{
    if (a.name.toLowerCase() > b.name.toLowerCase()){
      return 1;
    }else if (b.name.toLowerCase() > a.name.toLowerCase()) {
      return 1;
    }else{
      return 0;
    }
  });



// level 100
const heading = document.createElement("h1");
const image = document.createElement("img");
const epSeason= document.createElement("p");
const summary =document.createElement("div");


function makePageForEpisodes(episodeList) {
  
  const rootElem = document.getElementById("root");
  rootElem.innerHTML= "";
 const epCount = document.createElement("div");
 epCount.classList.add("episode_count");

  // epCount.textContent = `Got ${episodeList.length} episode(s)`;
  rootElem.append(epCount);

  episodeList.forEach((title) => {
    const movieCard =document.createElement("div");
    
    const heading = document.createElement("h1");
    heading.innerText = title.name;
    const image = document.createElement("img");
    image.src = title.image.medium;

    const epSeason= document.createElement("p");
    epSeason.innerText = `S${title.season.toString().padStart(2,0)} E${title.number.toString().padStart(2,0)}`;
    const summary = document.createElement("div");
    summary.innerText = title.summary;
    movieCard.append(heading,image,epSeason,summary);
    rootElem.append(movieCard);

//  combine season number and episode number into an episode code:

// Your page should state somewhere that the data has (originally) come from TVMaze.com, and link back to that site (or the specific episode on that site). See tvmaze.com/api#licensing.
    

  
   });
   //level 300
}

window.onload = setup();

function search(input){
  let allInput = allEpisodes.filter(episode =>{
    
    return (episode.name).toLowerCase().includes(input.toLowerCase()) || (episode.summary).toLowerCase().includes(input.toLowerCase());
    
  })

  makePageForEpisodes(allInput);

}
let searchInput = document.getElementById("search");
searchInput.addEventListener( "input", ()=> {
let input = searchInput.value;
search(input);
let option =document.createElement("option");
option.text ="text";
option.value ="myvalue";
})

