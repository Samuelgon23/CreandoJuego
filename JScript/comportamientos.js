let tiempoTerminado;
let intervaloDeTiempo;

function ComenzarCuentaRegresiva() {
    tiempoTerminado = setTimeout(tiempoCumplido, 30000);
    intervaloDeTiempo = setInterval(ticTac, 1000);

    document.getElementById("CuentaRegresiva").textContent = 30;
}

function ticTac() {
    let tiempo = document.getElementById("CuentaRegresiva").textContent;

    document.getElementById("CuentaRegresiva").textContent = tiempo - 1;    
}

function tiempoCumplido() {
    clearInterval(intervaloDeTiempo);
    document.getElementById("CuentaRegresiva").textContent = 0;
    document.getElementById("audioFinal").play();
    alert("GAME OVER: Se acabó el tiempo. Intenta nuevamente");
}

function finalizado() {
    clearTimeout(tiempoTerminado);
    clearInterval(intervaloDeTiempo);

    let fecha = new Date();
    let respuesta1 = document.getElementById("Respuesta1").value;
    let respuesta2 = document.getElementById("Respuesta2").value;
    let respuesta3 = document.getElementById("Respuesta3").value;
    let respuesta4 = document.getElementById("Respuesta4").value;
    let respuesta5 = document.getElementById("Respuesta5").value;

    let mensaje = fecha.toLocaleDateString("es-Es") + "\n" +
                    "1. "  + respuesta1 + "\n" + 
                    "1. "  + respuesta2 + "\n" + 
                    "1. "  + respuesta3 + "\n" + 
                    "1. "  + respuesta4 + "\n" + 
                    "1. "  + respuesta5; 
            alert(mensaje);
}

function volverAintentar() {
    location.reload();
}