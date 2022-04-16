const d = document,
w = window;

export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", e => {
        if(e.target === $form) {
            e.preventDefault();
            // alert("Formulario enviado");
            tester = w.open(
                $form.direccion.value,
                "tester", 
                `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
                );
        }
    })

    d.addEventListener("click", e => {
        if(e.target === $form.cerrar){
            tester.close();
            // e.preventDefault(); //no funciona cierre de ventana con botón cerrar. Según pude averiguar debe utilizarse una extensión del navegador.
        } 
    })
}