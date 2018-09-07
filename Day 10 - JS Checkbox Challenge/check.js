const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    const nodesArray = [...checkboxes];

    // Shift key down, box is being checked & another item has been checked
    if(e.shiftKey && this.checked && lastChecked) {
        nodesArray.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if(inBetween) checkbox.checked = true;
        });
    }
    // If user unchecks all boxes, reset lastChecked
    if(nodesArray.every(checkbox => checkbox.checked == false))
        lastChecked = null;
    else
        lastChecked = this;
}

checkboxes.forEach(
    checkbox => checkbox.addEventListener('click', handleCheck));
