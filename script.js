let img1 = document.createElement('img')
let img2 = document.createElement('img')
let img3 = document.createElement('img')

let myImg = document.createElement('img')
let randomImg = document.createElement('img')

let matchRes = document.createElement('p')
document.getElementById('result').appendChild(matchRes)
    



img1.src = '1.png'
img2.src = '2.png'
img3.src = '3.png'

document.getElementById('img1').appendChild(img1)
document.getElementById('img2').appendChild(img2)
document.getElementById('img3').appendChild(img3)

//create count and element
let count = 10;
let manWin = 0;
let cpuwin = 0;

let head = document.getElementById("heading");
head.textContent = `Number of Moves Left : ${count}`

img1.addEventListener('click', (() => {
    //calling match result function
    matchResult()
    
    if (count > 0) {
        myImg.setAttribute("src", img1.getAttribute("src"))
        document.getElementById('my-image').appendChild(myImg)
        loop()
        count--;
        head.textContent = `Number of moves left : ${count}`
        if (count == 0) {
            head.textContent = `No Moves Left`
        }
        if (img1.getAttribute("src") == randomImg.getAttribute("src")) {
            // result id la append pannanum    tie
            matchRes.textContent = `It Is Tied 😉`
            document.getElementById('result').appendChild(matchRes)

        }
        else if (img2.getAttribute("src") == randomImg.getAttribute("src")) {
            // cpu win cpu++
            cpuwin++
            console.log("cpu :", cpuwin);

            matchRes.textContent = `CPU Win 😒 : ${cpuwin}`
            document.getElementById('result').appendChild(matchRes)

        }
        else if (img3.getAttribute("src") == randomImg.getAttribute("src")) {
            // MAN Win 😎 :  man++
            manWin++
            console.log("man", manWin);

            matchRes.textContent = `MAN Win 😎 : ${manWin}`
            document.getElementById('result').appendChild(matchRes)

        }
    }

}))

img2.addEventListener('click', (() => {
    //calling match result function
    matchResult()

    if (count > 0) {
        let copy1 = img2.getAttribute("src")
        myImg.setAttribute("src", copy1)
        document.getElementById('my-image').appendChild(myImg)
        loop()
        count--;
        head.textContent = `Number of moves left : ${count}`
        if (count == 0) {
            head.textContent = `No Moves Left`
        }


        if (img2.getAttribute("src") == randomImg.getAttribute("src")) {
            // result id la append pannanum    tie
            matchRes.textContent = `It Is Tied 😉`
            document.getElementById('result').appendChild(matchRes)

        }
        else if (img1.getAttribute("src") == randomImg.getAttribute("src")) {
            // cpu win cpu++
            manWin++
            console.log("cpu :", manWin);

            matchRes.textContent = `MAN Win 😎 : : ${manWin}`
            document.getElementById('result').appendChild(matchRes)

        }
        else if (img3.getAttribute("src") == randomImg.getAttribute("src")) {
            // MAN Win 😎 :  man++
            cpuwin++
            console.log("man", cpuwin);

            matchRes.textContent = `cpu win ${cpuwin}`
            document.getElementById('result').appendChild(matchRes)

        }
    }
}))
img3.addEventListener('click', (() => {
    //calling match result function
    matchResult()
    if (count > 0) {
        let copy1 = img3.getAttribute("src")
        myImg.setAttribute("src", copy1)
        document.getElementById('my-image').appendChild(myImg)
        loop()
        count--;
        head.textContent = `Number of moves left : ${count}`
        if (count == 0) {
            head.textContent = `No Moves Left`
        }


        if (img3.getAttribute("src") == randomImg.getAttribute("src")) {
            // result id la append pannanum    tie
            matchRes.textContent = `It Is Tied 😉`
            document.getElementById('result').appendChild(matchRes)

        }
        else if (img1.getAttribute("src") == randomImg.getAttribute("src")) {
            // cpu win cpu++
            cpuwin++
            console.log("cpu :", cpuwin);

            matchRes.textContent = `CPU Win 😒 : ${cpuwin}`
            document.getElementById('result').appendChild(matchRes)

        }
        else if (img2.getAttribute("src") == randomImg.getAttribute("src")) {
            // MAN Win 😎 :  man++
            manWin++
            console.log("man", manWin);

            matchRes.textContent = `MAN Win 😎 : ${manWin}`
            document.getElementById('result').appendChild(matchRes)

        }
    }
}))

let reset = document.getElementById('btn')
reset.addEventListener('click', () => {
    window.location.reload()
})

document.getElementById('random').appendChild(randomImg)
function loop() {
    let randomResult = Math.floor(Math.random() * 3)
    console.log(randomResult);


    if (randomResult == 0) {
        randomImg.setAttribute("src", img1.getAttribute("src"))
    }
    else if (randomResult == 1) {
        randomImg.setAttribute("src", img2.getAttribute("src"))

    }
    else if (randomResult == 2) {
        randomImg.setAttribute("src", img3.getAttribute("src"))

    }
}

function matchResult() {
    if (count == 0) {
        head.textContent = `No Moves Left`
        if (cpuwin == manWin) {
            matchRes.textContent = `Draw`
            document.getElementById('result').appendChild(matchRes)
        }
        else if (cpuwin > manWin) {
            matchRes.textContent = `Match Result CPU Win ${cpuwin}`
            document.getElementById('result').appendChild(matchRes)
        }
        else {
            matchRes.textContent = `Match Result MAN Win 😎 : ${manWin}`
            document.getElementById('result').appendChild(matchRes)
        }
    }
}