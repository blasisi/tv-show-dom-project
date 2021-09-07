//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

// Global variables
const rootElem = document.getElementById("root");
const heading = document.createElement("h1");
const image = document.createElement("img");
const epSeason= document.createElement("p");
const summary =document.createElement("div");
const links =document.createElement("url");


function makePageForEpisodes(episodeList) {
  
  const rootElem = document.getElementById("root");
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

  }
}

//  combine season number and episode number into an episode code:
    const combineEp =document.createElement("select");

// Your page should state somewhere that the data has (originally) come from TVMaze.com, and link back to that site (or the specific episode on that site). See tvmaze.com/api#licensing.
    `


    

   });
}

window.onload = setup;
