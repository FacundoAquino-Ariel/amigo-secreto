//declara un vector "amigos" para almacenar los nombres de los amigos.
let amigos = [];

function verificar(nuevo) {
    // Retorna true si contiene números. el metacarácter "\d" representa numeros del 0 al 9 y testea con ".test" la variable "nuevo".
    return /\d/.test(nuevo);
}

function agregaramigo(){
    //conecta la caja de texto con la variable "nuevo".
    let nuevo = (document.getElementById('amigo').value);
   
    //verifica si el nombre es válido para almacenarse.
    if(nuevo=='' || nuevo==' '){
        alert("Por favor, inserte un nombre.");
    }else
        if(verificar(nuevo)){
            alert("No se permiten numeros.");
        }else
            if(amigos.includes(nuevo)){
                alert("Ya agrego este nombre");
            }else{
                amigos.push(nuevo);
                actualizar(nuevo);
            }

    //limpia la caja de texto.            
    document.getElementById('amigo').value = '';       
}

function actualizar(nuevo){    
    //selecionana el elemento padre.
    const lus = document.getElementById('listaAmigos');

    //crea un li.
    const nuevoli = document.createElement('li');
    const lis = document.createTextNode(nuevo);

    //agrega un li.
    nuevoli.appendChild(lis);
    lus.appendChild(nuevoli);
}


function sortearAmigo(){
    var lis;
    //conecta la variable que almacena el amigo secreto sorteado con la etiqueta "lu". 
    let re = document.getElementById('resultado');

    //verifica si la cadena está vacía.
    if(amigos.length==0){
        alert('No exiten amigos en la lista.');
    }else
        //crea un numero psudoaleatorio.
        re.innerHTML = "El amigo secreto sorteado es: " + amigos[Math.floor(Math.random()*amigos.length)];

    //borra la lista y elimina todos los nombres almacenados en el vector.
    lis = document.querySelectorAll("#listaAmigos li").forEach(li => li.remove());
    amigos.length=0;
}

