btnNumbers.addEventListener("click", appear);

function appear() { //let game menu appear
    function toCentre() {
        let sectt = document.querySelector("section.gameOneMenu");
        sectt.classList.add("animation");
    }
    setTimeout(toCentre, 100);
}

let btnPlay = document.querySelector("button.play"); //"PLAY" button in menu game one
btnPlay.addEventListener("click", clearFirstGameMenu);

function clearFirstGameMenu() {
    let howManyNumbers = document.getElementById('num').value; //gettin values from input and rounding numbers
    let delay = document.getElementById('delay').value;
    howManyNumbers = Math.floor(howManyNumbers);
    delay = Math.floor(delay);

    if (delay > 0 && howManyNumbers > 0) { //check values and clear window
        let sectt = document.querySelector("section.gameOneMenu");
        sectt.classList.remove("animation");

        setTimeout(() => {
            sectt.style.display = "none";
        }, 500);
    }
    setTimeout(gameOne(), 2000); //mainGame
}

function gameOne() {
    let sectOne = document.querySelector("section.gameOne");
    sectOne.style.display = "flex";

    let howManyNumbers = document.getElementById('num').value; //gettin values from input and rounding numbers
    let delay = document.getElementById('delay').value;
    howManyNumbers = Math.floor(howManyNumbers);
    delay = Math.floor(delay) - 0.4;

    let numb = document.querySelector("section.gameOne div.emergingNumber");
    let result = document.querySelector("div.result");
    let isCorrect = document.querySelector("div.isCorrect");

    let arr = [];
    for (let i = 0; i < howManyNumbers; i++) {
        let theRandomNumber = Math.floor(Math.random() * 10);
        arr.push(theRandomNumber);
        result.textContent += theRandomNumber;
    }
    for (let i = 0; i < howManyNumbers; i++) {
        setTimeout(() => {
            numb.textContent = arr[i];
            numb.style.animation = "emerge 0.2s forwards";
            setTimeout(() => {
                numb.style.animation = "disappear 0.2s forwards";
            }, delay * 1000 - 200);
        }, delay * 1000 * (i + 1));
    }

    let btnCheck = document.querySelector("button.check");

    setTimeout(() => {
        let inp = document.querySelector("input.numberArray");
        inp.style.display = "block";

        btnCheck.style.display = "block";
        numb.style.display = "none";

        btnCheck.addEventListener("click", gameOneCheck);
    }, delay * 1000 * (howManyNumbers + 1));

    function gameOneCheck() {
        let inp = document.querySelector("input.numberArray").value;
        let numberFromArr="";
        arr.forEach((item,index)=>{
            numberFromArr+=item;
        })
        isCorrect.style.display="block";
        if(numberFromArr==inp){
            isCorrect.textContent = "CORRECT";
        }
        else{
            isCorrect.textContent = "WRONG";
        }
    }
}
