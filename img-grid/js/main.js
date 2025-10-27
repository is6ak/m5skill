async function loadImages() {
    try {
        const res = await fetch('data/data.json');
        const data = await res.json();

        const grid = document.querySelector('.grid')
        Object.values(data).forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            grid.appendChild(img);
        });
    } catch(error) {
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    loadImages();
})