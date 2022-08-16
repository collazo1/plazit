let estudiantes = ["jhon", "rivas", "collazo",];

function saludarEstudiante(estudiante){
    console.log(`hola, ${estudiantes}`);
    

}

while(estudiantes.length > 0){
    /**console.log(estudiantes);**/
    let estudiante = estudiantes.shift();
    saludarEstudiante(estudiantes);

}


