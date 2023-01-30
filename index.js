// SECTION: HEADER

// 607

let home = document.getElementById('home');
let store = document.getElementById('store');
let subscribe = document.getElementById('subscribe');

const goToHome = () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}

const goToStore = () => {
    window.scroll({
        top: 300,
        behavior: 'smooth'
    });
}

const goToSubscribe = () => {
    window.scroll({
        top: 815,
        behavior: 'smooth'
    });
}

home.addEventListener('click', goToHome);
store.addEventListener('click', goToStore);
subscribe.addEventListener('click', goToSubscribe);



// SECTION: STORE

function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition, slickWidth, track) : nextAction(leftPosition, trackWidth, listWidth, slickWidth, track)
}

let prevAction = (leftPosition, slickWidth, track) => {
    if(leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition, trackWidth, listWidth, slickWidth, track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}