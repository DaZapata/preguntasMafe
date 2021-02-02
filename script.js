function verificarRespuestas() {
    
    // numero total de preguntas
    var total = 6

    // puntos por cada pregunta
    var puntos = 0

    // variable para tener referencia al formulario
    var myForm = document.forms["quizForm"]

    // arreglo que almacena las respuestas correctas por cada pregunta
    var respuestas = ["a", "b", "c", "a", "d", "d"]

    for (var i = 1; i <= total; i++){
        if (myForm["p" + i].value === null || myForm["p" + i].value === "" ){
            alert('Por favor responde a la pregunta ' + i)
            return false
        } else {
            if(myForm["p" + i].value === respuestas[i - 1]){
                puntos++
            } else {
                alert('Respuesta mala: Numero ' + i)
            }
        }
    }

 
    var resultado = document.getElementById("resultado")
    resultado.innerHTML = '<h3> Obtuviste <span>' + puntos + '</span> de <span>' + total +  ' puntos </span></h3>'
    

    return false

}
