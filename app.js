// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var ingresaAmigos=[];



function agregarAmigo() {

      

    let capturaAmigos= document.getElementById("amigo").value;  //captura los amigos escritos en en la caja de texto

      
    if (capturaAmigos === "")                                 // envia mensaje si la caja de texto esta vacia y dan clic en el boton Añadir
        {
          
          return alert("Por favor, inserte un nombre de un amigo." );

    } else
     {
     
        
        if(ingresaAmigos.includes(capturaAmigos)){            //verifica que el amigo no este repetido, y si lo esta, borra el valor en la caja de texto y llama de nuevo a la funcion

        alert ("Este amigo ya esta en la lista");                            //genera mensaje que especifica que el amigo introducido esta reducido 

        
        reiniciaCajaTexto();                                //funcion para borrar nombre de la caja de texto 
        

           return agregarAmigo();                          //se llama nuevamente a la funcion para que se pueda agregar otro amigo
           
        
    }else{                                                


        
        ingresaAmigos.push(capturaAmigos);               // ingresa al nuevo amigo a la lista y lo envia al final de esta

        agregarAmigosLista(ingresaAmigos);               // llama a la funcion agregarElementosLista
        reiniciaCajaTexto();                            //funcion para borrar nombre de la caja de texto    
        
        
        
          //console.log(ingresaAmigos);
    }
   } 
 
    
   
                    


}


function agregarAmigosLista(elemento){                       //funcion para agregar nombres a una lista en html

    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = "";                                   // Limpia la lista para evitar duplicados 

   for (let i=0; i< elemento.length;i++){                   //  bucle for para recorrer el arreglo ingresaAmigos y crear elementos de lista (<li>) para cada título.
                    
       lista.innerHTML += `<li>${elemento[i]}</li>`;        //+=: agrega uno por uno los amigos a la lista;

           
   }      
    
        

      
   }



function reiniciaCajaTexto() {                  //funcion para borrar nombre digitado de la caja de texto

    document.getElementById("amigo").value="";

}



function sortearAmigo(){                        //función que seleccione de manera aleatoria uno de los nombres almacenados en el array ingresaAmigos
   

    
      let numeroGenerado = Math.floor(Math.random() * ingresaAmigos.length);              //genera el numero aleatorio usando el array ingresaAmigos.length
       
   
  
      if (ingresaAmigos.length < 1) {                                                     // revisa que como minimo el array tenga dos amigos agregados para permitir jugar
        alert("Por favor, ingresa al menos 1 amigos.");
        return;
    } 
  
      else {

        let result = document.getElementById("resultado"); 
        result.innerHTML = "";                                                       // Limpia la lista para evitar duplicados
        result.innerHTML += `Tu amigo secreto es: ${ingresaAmigos[numeroGenerado]}`;   //genera el aviso de quien es el amigo secreto escogido al azar
                 
        ingresaAmigos.splice(numeroGenerado, 1);                                          //Elimina al amigo que ya fue seleccionado, esto para que no se vuelva a seleccionar nuevamente
       
        agregarAmigosLista(ingresaAmigos);                                               // Actualizar la lista de amigos restantes

       } 
    
      

   

   //console.log(ingresaAmigos);  
   

}



