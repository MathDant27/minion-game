const minion = document.querySelector(".minion");
const pipe = document.querySelector(".cano");

const jump = () => {
    minion.classList.add("jump");

    setTimeout(() => {
        minion.classList.remove("jump");
    }, 500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const minionPosition = +window
        .getComputedStyle(minion)
        .bottom.replace("px", "");

    if (pipePosition <= 137 && pipePosition > 0 && minionPosition < 100) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        minion.style.animation = "none";
        minion.style.bottom = `${minionPosition}px`;

        minion.src = "./images/minion roxo.png";
        minion.style.width = "270px";
        minion.style.marginLeft = "-50px";

        clearInterval(loop);
    }
}, 10);

document.addEventListener("keydown", jump);
