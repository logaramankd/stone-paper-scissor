let count = 10;
let manWin = 0;
let cpuWin = 0;

let head = document.getElementById("heading");
head.textContent = `Number of Moves Left : ${count}`;

let matchRes = document.createElement('p');
document.getElementById('result').appendChild(matchRes);

let img1 = document.createElement('img');
let img2 = document.createElement('img');
let img3 = document.createElement('img');

let myImg = document.createElement('img');
let randomImg = document.createElement('img');

img1.src = '1.png';
img2.src = '2.png';
img3.src = '3.png';

document.getElementById('img1').appendChild(img1);
document.getElementById('img2').appendChild(img2);
document.getElementById('img3').appendChild(img3);

document.getElementById('random').appendChild(randomImg);

function loop() {
    let randomResult = Math.floor(Math.random() * 3);

    if (randomResult === 0) {
        randomImg.setAttribute("src", img1.getAttribute("src"));
    } else if (randomResult === 1) {
        randomImg.setAttribute("src", img2.getAttribute("src"));
    } else {
        randomImg.setAttribute("src", img3.getAttribute("src"));
    }
}

function handleClick(selectedImg) {
    if (count > 0) {
        myImg.setAttribute("src", selectedImg.getAttribute("src"));

        // Clear previous player's image before appending a new one
        let myImageContainer = document.getElementById('my-image');
        myImageContainer.innerHTML = ''; // Remove previous image
        myImageContainer.appendChild(myImg);

        loop(); // Generate CPU choice

        count--;
        head.textContent = count > 0 ? `Number of Moves Left : ${count}` : `No Moves Left`;

        // Determine winner
        if (selectedImg.getAttribute("src") === randomImg.getAttribute("src")) {
            matchRes.textContent = `It Is Tied 😉`;
        } else if (
            (selectedImg.getAttribute("src") === img1.getAttribute("src") && randomImg.getAttribute("src") === img3.getAttribute("src")) ||
            (selectedImg.getAttribute("src") === img2.getAttribute("src") && randomImg.getAttribute("src") === img1.getAttribute("src")) ||
            (selectedImg.getAttribute("src") === img3.getAttribute("src") && randomImg.getAttribute("src") === img2.getAttribute("src"))
        ) {
            // Player wins
            manWin++;
            matchRes.textContent = `MAN Win 😎 : ${manWin}`;
        } else {
            // CPU wins
            cpuWin++;
            matchRes.textContent = `CPU Win 😒 : ${cpuWin}`;
        }
    }

    matchResult(); // Check final result
}

img1.addEventListener('click', () => handleClick(img1));
img2.addEventListener('click', () => handleClick(img2));
img3.addEventListener('click', () => handleClick(img3));

let reset = document.getElementById('btn');
reset.addEventListener('click', () => window.location.reload());

function matchResult() {
    if (count === 0) {
        if (cpuWin === manWin) {
            matchRes.textContent = `Draw`;
        } else if (cpuWin > manWin) {
            matchRes.textContent = `Match Result: CPU Win 😒 (${cpuWin})`;
        } else {
            matchRes.textContent = `Match Result: MAN Win 😎 (${manWin})`;
        }
    }
}
