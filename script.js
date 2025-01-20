function agregar(value) {
    document.getElementById("resultados").value += value;
}
function igual() {
    try {
        const result =
            eval(document.getElementById("resultados").value)
        document.getElementById("resultados").value = result;
    }
    catch (error) {
        document.getElementById("resultados").value = "Error";
    }
}
function Limpiar() {
    document.getElementById("resultados").value="";
}
function Atras() {
    document.getElementById("resultados").value = document.getElementById("resultados").value.slice(0, -1);
}
