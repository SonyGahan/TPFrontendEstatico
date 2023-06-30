function mostrardatos() {
    //lee los valores desde las etiquetas
    var nombre = document.getElementById("name").value;
    var correo = document.getElementById("email").value;
    var asunto = document.getElementById("subject").value;

    if (nombre == "") {
        alert("El nombre es obligatorio");
        document.getElementById("name").focus();
    } else {
        if (correo == "") {
            alert("El nombre es obligatorio");
            document.getElementById("email").focus();
        }else{
            document.getElementById("name").innerHTML=nombre;
            document.getElementById("email").innerHTML=correo;
            document.getElementById("subject").innerHTML=asunto;
            document.getElementById("name").focus();
        }

    }

    function borrar() {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("error").innerHTML = "";
    } 

}