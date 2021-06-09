
/* Ejercicio 1 */
function ejercicio1() {
    const nom = ["D", "A", "V", "I", "D"];

    let display = nom.reduce(function(acumulador, letra) {return acumulador + letra;}, "");    

    document.getElementById("display").innerHTML = display;    
}


/* Ejercicio 2 */
function ejercicio2() {
    const nomEx2 = ["D", "A", "V", "I", 1, "D"];
    let mensaje = "Partim del nom: ";

    for (let i = 0; i < nomEx2.length; i++) {
        mensaje += nomEx2[i];    
    }

    mensaje += ".<br>";       

    for (let i = 0; i < nomEx2.length; i++) {
        if (!isNaN(nomEx2[i])) {
            mensaje +="Els noms de persones no contenen el número: " + nomEx2[i] + "<br>";
        }
        else {
            switch (nomEx2[i]) {
                case "A":
                    
                case "E":
                    
                case "I":
                    
                case "O":
                    
                case "U":
                    mensaje += "He trobat la VOCAL: " + nomEx2[i] + "<br>";
                    break;
                default:
                    mensaje +="He trobat la CONSONANT: " + nomEx2[i] + "<br>"; 
            }
        }    
    }

    document.getElementById("display").innerHTML = mensaje; 
}


/* Ejercicio 3 */
function ejercicio3() {
    const nomEx3 = ["D", "A", "V", "I", "D"];
    let mensaje = "";
    var nomMap = {};

    mensaje += "Partiendo del array: " + nomEx3 + "<br>";
    
    nomEx3.map(letra => {nomMap[letra] = (nomMap[letra] || 0) + 1;});

    mensaje = addValueToString(mensaje, nomMap);   
    
    document.getElementById("display").innerHTML = mensaje;
}

function addValueToString(mensaje, array) {
    for (x in array) {
        mensaje += x + ": " + array[x] + "<br>";
    };

    return mensaje;
}


/* Ejercicio 4 */
function ejercicio4() {
    const arrName = ["D", "A", "V", "I", "D"];
    const arrSurname = ["C", "A", "S", "T", "R", "I", "L", "L", "Ó", "N"];
    const arrFullName = arrName.concat(" ").concat(arrSurname);

    let display = arrFullName.reduce(function(acumulador, letra) {return acumulador + letra;}, "");

    document.getElementById("display").innerHTML = display;    
}


/* Ejercicio nivel 2 */
function nivel2() {
    var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';     

    const arrValidaciones = returnArrEmail(str)

    function returnArrEmail (texto) {    
        const expresion =/([a-z0-9-]+)@([a-z0-9-ñ]+)\.([a-z]{2,8})(\.[a-z]{2,8})?/gi;
        const validation = texto.match(expresion);
        return validation;
    }

    const arrSinDuplicados = arrValidaciones.filter((value, index) => {
        return arrValidaciones.indexOf(value) === index;        
    });

    let display = arrSinDuplicados.reduce(function(acumulador, letra) {return acumulador + letra + "<br>";}, "");

    document.getElementById("display").innerHTML = display;    
}