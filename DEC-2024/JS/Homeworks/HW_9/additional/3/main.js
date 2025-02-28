
let musicTracks = [];


let trackItems = document.querySelectorAll('.item-grid__item');


trackItems.forEach((track)=> {
    let title = track.querySelector('.item-grid-card__title') ? track.querySelector('.item-grid-card__title').innerText : 'Невідомо';
    let author = track.querySelector('.item-grid-music-preview__author') ? track.querySelector('.item-grid-music-preview__author').innerText : 'Невідомо';
    let mp3 = track.querySelector('.item-grid-card item-grid-card--show-meta') ? track.querySelector('.item-grid-card item-grid-card--show-meta').href : 'Невідомо';

    musicTracks.push({
        title: title,
        author: author,
        mp3: mp3
    });
});

console.log(musicTracks);
