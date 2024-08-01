let msg = document.querySelector(".msg");
let counter = document.getElementById("counter");
let img = document.getElementById("img");
let container = document.querySelector(".container");
let audio = document.getElementById("aud");
let click = document.querySelector(".click");
let days = 0;

function getRandomInt(num){
    return Math.floor(Math.random() * num);
}
function createHeart(){
    let heart = document.createElement('img');
    heart.src = 'redheart.png';
    heart.className = 'red';
    heart.style.top = `${getRandomInt(240)}px`;
    heart.style.left = `${getRandomInt(240)}px`;
    heart.style.transform = `rotate(${getRandomInt(60)}deg)`;
    container.appendChild(heart);
    setTimeout(()=>{
        heart.remove();
    },5000);
}

const interval = setInterval(() => {
    days++;
    counter.textContent = days;

    if (days === 120) {
        clearInterval(interval);

        setTimeout(() => {
            counter.style.transform = "scale(1)";
            counter.style.transition = "all 1s ease-in-out";
            msg.classList.add("visible");
        }, 1000);

        setTimeout(() => {
            container.classList.add("heart");
            click.style.opacity = "1";
            click.style.transition = "all 2s ease-in-out";
            container.addEventListener("click", () => {
            audio.play();
            for(let i = 0 ; i < 30 ; i++){
                createHeart();
            } 
            });
        }, 3000);
    }
}, 45);
