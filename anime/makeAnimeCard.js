export function makeAnimeCard(data){
    let cardEl = document.createElement("article");
    cardEl.className = "anime__card";

    let imgEl = document.createElement("img");
    imgEl.src = data.images.webp.large_image_url;
    imgEl.className = "anime__card-img";
    imgEl.alt = "anime photo";
    cardEl.appendChild(imgEl);

    let containerEl = document.createElement("div");
    containerEl.className = "anime__card-info";

    let titleEl = document.createElement("h2");
    titleEl.className = "anime__card-title";
    titleEl.innerText = data.title;
    containerEl.appendChild(titleEl);

    let resEl = document.createElement("p");
    resEl.className = "anime__card-resume";
    resEl.innerText = data.synopsis;
    containerEl.appendChild(resEl);

    let scoreEl = document.createElement("div");
    scoreEl.className = "anime__card-score";
    scoreEl.innerText = data.score;
    containerEl.appendChild(scoreEl);

    cardEl.appendChild(containerEl);

    let body = document.querySelector("body");
    body.appendChild(cardEl);
}