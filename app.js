var count = 0;
var countElement = document.getElementById("count");

function updateCount() {
    countElement.textContent = count;
    if (count > 0) {
        countElement.style.color = "green";
    } else if (count < 0) {
        countElement.style.color = "red";
    } else {
        countElement.style.color = "black";
    }
}

function increase() {
    count++;
    updateCount();
}

function decrease() {
    count--;
    updateCount();
}

updateCount(); 
