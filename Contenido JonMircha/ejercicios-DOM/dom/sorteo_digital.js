const d = document;

export default function lottery(btn, selector) {
    const getWinner = (selector) => {
        const $participantes = d.querySelectorAll(selector),
        random = Math.floor(Math.random()*$participantes.length),
        winner = $participantes[random];

        console.log($participantes, random, winner);

        return `El ganador es ${winner.textContent}`;
    }

    d.addEventListener("click", e => {
        if(e.target.matches(btn)) {
            let result = getWinner(selector);
            alert(result);
            console.log(result);
        }
    })
}