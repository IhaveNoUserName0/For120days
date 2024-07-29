let msg = document.querySelector(".msg");
let counter = document.querySelector("#counter");
let img = document.querySelector("#img");
let container = document.querySelector(".container");
let days = 0;

const interval = setInterval(() => {
    days++;
    counter.innerText = days;

    if (days === 120) {
        clearInterval(interval);

        setTimeout(() => {
            counter.style.fontSize = "28px";
            counter.style.transition = "all 2s ease-in-out";
            msg.classList.add("visible");
        }, 1000);

        setTimeout(() => {
            container.classList.add("heart");
        }, 3000);
    }
}, 45);
console.log(120);
