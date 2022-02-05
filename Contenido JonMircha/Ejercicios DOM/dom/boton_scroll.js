const d = document,
w = window;

export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);
    
    w.addEventListener("scroll", (e) => {
        // Propiedades del DOM: 
        //window.pageYOffset y document.documentElement.scrollTop
        //console.log(w.pageYOffset, d.documentElement.scrollTop);
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        
        if (scrollTop > 1000){
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");    
        }

    });

    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top: 0,
            })
        }
    });
}