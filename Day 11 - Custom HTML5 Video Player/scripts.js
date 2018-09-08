// Get out elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-pb_skip]');
const fullscreen = player.querySelector('button[name="fullscreen"]');

let mousedown = false;

// Build out funtions
function togglePLay(){
    video.paused ? video.play() : video.pause();
}

function videoToggleButton() {
    const icon = video.paused ? '►' : '&#10074 &#10074';
    toggle.innerHTML = icon;
    playbackSkip();
}

function playbackSkip() {
    video.currentTime += parseFloat(this.dataset.pb_skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    video.muted = false;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function updateProgress(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function makeFullscreen() {
    player.classList.toggle('fullscreen');

    // 'Full'-Fullscreen
    // if (!document.mozFullScreen && !document.webkitFullScreen) {
    //     if (video.mozRequestFullScreen) {
    //         video.mozRequestFullScreen();
    //     } else {
    //         video.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    //     }
    // } else {
    //     if (document.mozCancelFullScreen) {
    //         document.mozCancelFullScreen();
    //     } else {
    //     document.webkitCancelFullScreen();
    //     }
    // }
}

// Hook up the event listners
video.addEventListener('click', togglePLay);
video.addEventListener('play', videoToggleButton);
video.addEventListener('pause', videoToggleButton);
video.addEventListener('progress', handleProgress);

toggle.addEventListener('click', togglePLay);

skipButtons.forEach(skipButton => skipButton.addEventListener('click', playbackSkip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

progress.addEventListener('click', updateProgress);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseout', () => mousedown = false);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousemove', (e) => mousedown && updateProgress(e));

fullscreen.addEventListener('click', makeFullscreen);
