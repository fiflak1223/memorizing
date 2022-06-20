let btnNumbers = document.querySelector("button.numbers");
let btnPersonal = document.querySelector("button.personal");
let btn = [btnNumbers, btnPersonal];

btn.forEach((item, index) => { //adding event listener to each menu button
    item.addEventListener("click", clearMenu);
});

function clearMenu() { //clear window with animation "to the bottom/top"
    let rule = Array.from(document.querySelectorAll("div.rule")); //explaining text go below
    rule.forEach((item,index)=>{
        item.classList.add("belowAnimation");
    });
    
    let sect = document.querySelector("section.menu");  //main menu go top
    sect.classList.add("topAniamtion");
    
    function clear() { //set section invisible
        sect.style.display = "none";
    }
    setTimeout(clear,500);
}

