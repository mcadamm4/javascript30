/*jslint es6 */
"use strict";

const hero = document.getElementById('hero');

function moveShadow(e) {
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;
    const x = e.clientX;
    const y = e.clientY;
    const center = { x: winWidth/2, y: winHeight/2 };

    const shadowX = Math.ceil((center.x - x) / 10);
    const shadowY = Math.ceil((center.y - y) / 10);
    const blur = Math.abs(shadowX*shadowY)/100;

    const r = Math.abs(Math.ceil(((shadowX*shadowY)/255)*100));

    console.log(r, shadowX, shadowY, blur);
    document.getElementById("titleText").style.textShadow = `${shadowX}px ${shadowY}px ${blur}px rgba(${r}, 0, 0, 0.1)`;
}

hero.addEventListener('mousemove', moveShadow);
