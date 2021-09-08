//You can edit ALL of the code here
let allEpisodes = [];
function setup() {
   allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

// lv
const rootElem = document.getElementById("root");
const heading = document.createElement("h1");
const image = document.createElement("img");
const epSeason= document.createElement("p");
const summary =document.createElement("div");


function makePageForEpisodes(episodeList) {
  
  const rootElem = document.getElementById("root");
  rootElem.innerHTML= "";
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  episodeList.forEach((title) => {
    const heading = document.createElement("h1");
    heading.innerText = title.name;
    const image = document.createElement("img");
    image.src = title.image.medium;

    const epSeason= document.createElement("p");
    epSeason.innerText = `S${title.season.toString().padStart(2,0)} E${title.number.toString().padStart(2,0)}`;
    // padStrart is to number= 01, parseInt from string to number.

    const summary =document.createElement("div");
    summary.innerText = title.summary;
    rootElem.append(heading,image,epSeason,summary);

//  combine season number and episode number into an episode code:

// Your page should state somewhere that the data has (originally) come from TVMaze.com, and link back to that site (or the specific episode on that site). See tvmaze.com/api#licensing.
    
  

    

   });
}

window.onload = setup;

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
})

