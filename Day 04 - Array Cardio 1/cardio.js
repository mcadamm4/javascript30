// Get your shorts on - this is an array workout
// ## Array Cardio Day 1
// Some sample data
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947},
    { first: 'Katherin', last: 'Blodgett', year: 1898, passed: 1979},
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
];

const people = [
    'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel',
    'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig',
    'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
    'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd',
    'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
    'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
    'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin',
    'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
    'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
    'Blair, Tony', 'Blake, William'
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
    const fifthteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
    console.log('1. Filter the list of inventors for those who were born in the 1500s');
    console.table(fifthteen);
    const sixteen = inventors.filter(inventor => (inventor.year >= 1600 && inventor.year < 1700));
    console.table(sixteen);

// Array.prototype.map()
// 2. Give us an array of inventors first and last names
    const firstNames = inventors.map(inventor => (`${inventor.first} ${inventor.last}`));
    console.log('2. Give us an array of inventors first and last names');
    console.table(firstNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
    const ordered = inventors.sort((a, b) => ((a.year > b.year) ? 1 : -1));
    console.log('3. Sort the inventors by birthdate, oldest to youngest');
    console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live
    const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year)}, 0);
    console.log('4. How many years did all the inventors live');
    console.log(totalYears);

// 5. Sort the inventors by years lived
    const orderedLifespan = inventors.sort(function(a, b) {
        const lastGuy = a.passed - a.year; // Get last first guys lifespan
        const nextGuy = b.passed - b.year; // Get second guys lifespan
        return lastGuy > nextGuy ? -1 : 1; // If second is older than first then swap
    });
    console.log('5. Sort the inventors by years lived');
    console.table(orderedLifespan);

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
//     https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
/*
    console.log("6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris");
    const category = document.querySelector('.mw-category');
    const links =Array.from(category.querySelectorAll('a'));
    const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes('de'));
    console.table(de);
*/

// 7. Sort exercise
//     - Sort the people alphabetically by last names
    console.log('7. Sort exercise \n - Sort the people alphabetically by last names');

    const sortedNames = people.sort((lastOne, nextOne) => {
        const [alast, afirst] = lastOne.split(', ');
        const [blast, bfirst] = nextOne.split(', ');
        return alast > blast ? 1 : -1;
    });
    console.table(sortedNames);

// 8. Reduce exercise
//     - Sum up the instances of each of these
    console.log("8. Reduce exercise \n   - Sum up the instances of each fo these \n\n const data = ['car', 'car', 'truck', 'truck', 'bike', \n 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ] ");
    const data = ['car', 'car', 'truck', 'truck',
                'bike', 'walk', 'car', 'van', 'bike',
                'walk', 'car', 'van', 'car', 'truck']

    const transportration = data.reduce(function(obj, item) {
        if(!obj[item])
            obj[item]=0;
        obj[item]++;
        return obj;
    }, {});

    console.log(transportration);
