let msg = document.querySelector(".msg");
let counter = document.getElementById("counter");
let img = document.getElementById("img");
let container = document.querySelector(".container");
let audio = document.getElementById("aud");
let click = document.querySelector(".click");
let days = 0;

const interval = setInterval(() => {
    days++;
    counter.innerText = days;

    if (days === 120) {
        clearInterval(interval);

        setTimeout(() => {
            counter.style.fontSize = "28px";
            counter.style.transition = "all 1s ease-in-out";
            msg.classList.add("visible");
        }, 1000);

        setTimeout(() => {
            container.classList.add("heart");
            click.style.opacity = "1";
            click.style.transition = "all 2s ease-in-out";
            container.addEventListener("click", () => {
                console.log("click");
                audio.play();
            });
        }, 3000);
    }
}, 45);
console.log(120);
