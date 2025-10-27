import { makeAnimeCard } from "./makeAnimeCard.js";

let url = "https://api.jikan.moe/v4/top/anime?type=tv";

async function fetchAnime(){
    let response = await fetch(url);
    let json = await response.json();

    for (let i = 0; i < 10; i++){
        let animeData = json.data[i];
        makeAnimeCard(animeData);
    }
}

fetchAnime();