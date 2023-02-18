import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');
const currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));

const throttled = throttle((timeupdate) => {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(timeupdate))
}, 1000);

if (Boolean(currentTime)) {
    player.setCurrentTime(currentTime.seconds)
}

player.on('play', () => { });

player.on('timeupdate', throttled);

