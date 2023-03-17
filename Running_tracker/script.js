const goal = 25;
let entries = [];
let entriesWrapper = document.querySelector("#entries");
document.getElementById("target").innerText = goal;

function addNewEntry(newEntry) {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild)
    const listItem = document.createElement('li');
    const listValue = document.createTextNode(newEntry.toFixed(1));
    listItem.appendChild(listValue);

    entriesWrapper.appendChild(listItem)
}

function reducer(total, currentValue){
    return total + currentValue;
}

function calTotal(){
    const totalValue=entries.reduce(reducer).toFixed(1);
    document.getElementById("total").innerText = totalValue;
    document.getElementById("progressTotal").innerText = totalValue;
}
 
function calAvg() {
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById("avgDistance").innerText = average;
}

function weeklyHigh() {
    const high = Math.max(...entries);
    document.getElementById("highWeek").innerText = high
}

function calcGoal() {
    const totalValue=entries.reduce(reducer).toFixed(1);
    completedPercent = totalValue / (goal / 100)
    const progressCircle = document.querySelector("#progressCircle")
    if (completedPercent > 100) completedPercent === 100;
    progressCircle.style.background = `conic-gradient(#70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%)`;
}

function handleSubmit(event) {
    event.preventDefault()
    const entry = Number(document.querySelector("#entry").value);
    if (!entry) return;
    document.querySelector("form").reset();
    entries.push(entry);
    addNewEntry(entry);
    calTotal()
    calAvg()
    weeklyHigh()
    calcGoal()
}

const form = document.querySelector("form").addEventListener("submit", handleSubmit);

