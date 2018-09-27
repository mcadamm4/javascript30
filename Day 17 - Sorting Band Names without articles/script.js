/*jslint es6 */
"use strict";

const bandsList = [
  'The Plot in You', 'The Devil Wears Prada',
  'Pierce the Veil', 'Norma Jean', 'The Bled',
  'Say Anything', 'The Midway State', 'We Came as Romans',
    'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
    'Anywhere But Here', 'An Old Dog'
];
const regex = /^(a |the |an )/i;
const strip = (bandName) => bandName.replace(regex, '').trim();
// Remove articles for comparison
const sortedBands = bandsList.sort((a, b) => strip(a) > strip(b) ? 1 : -1 );

document.getElementById('bands').innerHTML =
  sortedBands.map((band) => `<li>${band}</li>`).join('');
