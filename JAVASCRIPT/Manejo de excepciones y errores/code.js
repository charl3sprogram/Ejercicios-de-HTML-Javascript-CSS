const sendbutton = document.getElementById('snd-nota');

/* FUNCIONAMIENTO DE TRY-CATCH; SI LO QUE ESTA ADENTRO DEL TRY ESTÁ MAL PORQUE YA SABEMOS QUE PUEDE LANZAR ALGÚN ERROR, 
PUES ENTONCES CAPTA EL ERROR EN EL CATCH PARA HACER ALGO CON ÉL, EN CASO DE USAR EL THROW EN TRY, EL LANZA UN ERROR AUTOMATICAMENTE 
Y ESO ES LO QUE CAPTA EL CATCH (ERRORES DE SINTAXIS NO LOS OBTIENE EL CATCH)

OJO---- EN ESTE CASO HIPOTETICO DE EJERCICIO SE FORZÓ A USAR EL TRY CATCH PARA APRENDER COMO USARLO Y VERLO DE EJEMPLO, PERO ESTÁ NO ES 
LA FORMA CORRECTA DE USARLO EN UN VERDADERO PROGRAMA*/

sendbutton.addEventListener("click",()=>{
    let resultado, mensaje;
    try{   
        prevRes= parseInt(document.getElementById('nota').value); 
        if (isNaN(prevRes)) {
            throw "Error intentado hackear";
        } 
        resultado = Verificar_aprobacion(8,3,prevRes);
        mensaje = Definir_mensaje(prevRes); 

    } catch(e){
        resultado = "Me estás escribiendo cosas que no son válidas, escribe solo número";
        mensaje = "Estás ";
    }
    abrirModal(resultado,mensaje);
})

const Definir_mensaje = (prevRes)=>{
    let mensaje;
    switch (prevRes){
        case 1: mensaje ="No puedes ser tan malo";
        break;
        case 2: mensaje ="Eres malo para la materia";
        break;
        case 3: mensaje ="No sabes casi nada";
        break;
        case 4: mensaje ="Muy mal";
        break;
        case 5: mensaje ="Mal";
        break;
        case 6: mensaje ="Regular";
        break;
        case 7: mensaje ="Bien pero puede mejorar";
        break;
        case 8: mensaje ="Muy bien";
        break;
        case 9: mensaje = "Excelente";
        break;
        case 10: mensaje ="Eres el mejor brother";
        break;
        default: mensaje = null; 
    }
    return mensaje;
}

/* TIPICO HACER UNA VERIFICACION Y LUEGO REGRESAR STRING CON ETIQUETA HTML QUE VUELVA DE UN COLOR VERDE LO CORRECTO Y ROJO LO INCORRECTO; O DE LA FORMA QUE SE QUIERA --- YA QUE LUEGO USAREMOS .innerHTML PARA ESCRIBIR SOBRE LA CLASE EN HTML*/

const Verificar_aprobacion = (nota1,nota2, prevRes)=>{
/* BASANDOSE EN UN PROMEDIO DE LA NOTA QUE SUBES MAS LAS OTRAS 2 ACUMULADAS */
    promedio = (nota1 + nota2 + prevRes) / 3;
    if(promedio >= 6){
        return "<span class='green'>APROBADO</span>";
    }
    return "<span class='red'>DESAPROBADO</span>";  
}


const abrirModal = (res,msg)=>{
    document.querySelector('.result').innerHTML = res;
    document.querySelector('.mensaje').innerHTML = "Tu prueba: " + msg;
    let modal = document.querySelector('.modal-background');
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}