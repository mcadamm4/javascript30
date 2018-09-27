/*jslint es6 */
"use strict";

const hero = document.getElementById('hero');
const text = document.getElementById("titleText");
const shadowLimit = 10;

function moveShadow(e) {
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;

    if (this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    const center = { x: width/2, y: height/2 };

    const shadowX = Math.ceil((center.x - x) / (shadowLimit/2));
    const shadowY = Math.ceil((center.y - y) / (shadowLimit/2));
    const blur = Math.abs(shadowX*shadowY)/100;

    const r = Math.abs(Math.ceil(((shadowX*shadowY)/255)*100));

    console.log(r, shadowX, shadowY, blur);
    text.style.textShadow = `
        ${shadowX}px ${shadowY}px 0 rgba(${r}, 0, 0, 0.1),
        ${shadowX*-1}px ${shadowY*-1}px 0 rgba(255, 0, 255, 0.1)
    `;
}

hero.addEventListener('mousemove', moveShadow);
