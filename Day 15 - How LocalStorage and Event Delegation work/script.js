const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// Check local sotrage for values, else empty
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    var text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], plateList) {
    plateList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    }).join('');
}

// Event Delegation - Listen on something higher and check if it is what you want at the time i.e. Listen on lit and check if input element
function toggleDone(e) {
    if(!e.target.matches('input')) return;

    const index = e.target.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);
