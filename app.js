// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var ingresaAmigos=[];



function agregarAmigo() {

      

    let capturaAmigos= document.getElementById("amigo").value;  //captura los amigos escritos en en la caja de texto
    let result = document.getElementById("resultado"); 
         
      
    if (capturaAmigos === "")                                 // envia mensaje si la caja de texto esta vacia y dan clic en el boton Añadir
        {
          
          cambiaAnunciosResultado("Por favor, inserte un nombre de un amigo.");   /*llama a la funcion cambiaAnunciosResultados, para colocar la leyenda en la etiqueta ListaAmigos 
                                                                                   "Por favor, inserte un nombre de un amigo.";*/

    } else
     {
     
        
        if(ingresaAmigos.includes(capturaAmigos)){            //verifica que el amigo no este repetido, y si lo esta, borra el valor en la caja de texto y llama de nuevo a la funcion

                                                              //genera mensaje que especifica que el amigo introducido esta repetido 
         
                      
         reiniciaCajaTexto();                                //funcion para borrar nombre de la caja de texto 

                 
         //agregarAmigo();                                      //se llama nuevamente a la funcion para que se pueda agregar otro amigo
                                                             
         cambiaAnunciosResultado("Este amigo ya esta en la lista");  //funcion que coloca el mensaje en la etiqueta resultado

           return;                             
        
    }else{                                                


        result.innerHTML = "";

        ingresaAmigos.push(capturaAmigos);               // ingresa al nuevo amigo a la lista y lo envia al final de esta

        agregarAmigosLista(ingresaAmigos);               // llama a la funcion agregarElementosLista
        reiniciaCajaTexto();                            //funcion para borrar nombre de la caja de texto    
        
        
        
          //console.log(ingresaAmigos);
    }
   } 
 
    
   
                    


}


function agregarAmigosLista(elemento){                       //funcion para agregar nombres a una lista en 

    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = "";                                   // Limpia la lista para evitar duplicados 
    
    let contenidoLista="";

   for (let i=0; i< elemento.length;i++){                   //  bucle for para recorrer el arreglo ingresaAmigos y crear elementos de lista (<li>) para cada título.
                    
    contenidoLista += `<li>${elemento[i]}</li>`;           //+=: agrega uno por uno los amigos a la varaible contenidoLista;

           
   }      
    
   lista.innerHTML = contenidoLista                        //lista.innerHTML se actualiza 1 vez

   return;   

   }



function reiniciaCajaTexto() {                  //funcion para borrar nombre digitado de la caja de texto

    

    return document.getElementById("amigo").value="";;

}



function sortearAmigo(){                        //función que seleccione de manera aleatoria uno de los nombres almacenados en el array ingresaAmigos
   

    
      let numeroGenerado = Math.floor(Math.random() * ingresaAmigos.length);              //genera el numero aleatorio usando el array ingresaAmigos.length
       
   
  
      if (ingresaAmigos.length < 1) {                                       // revisa que como minimo el array tenga 1 amigo agregado para permitir jugar
        
                                                                            

        cambiaAnunciosResultado("Por favor, ingresa al menos 1 amigo.");   //funcion que coloca el mensaje en la etiqueta resultado en el html

        
        return ;
    } 
  
      else {

                                                                                            
                                                                                       

        cambiaAnunciosResultado(`Tu amigo secreto es: ${ingresaAmigos[numeroGenerado]}`) //funcion que coloca el mensaje en la etiqueta resultado en el html
                 
        ingresaAmigos.splice(numeroGenerado, 1);                                          //Elimina al amigo que ya fue seleccionado, esto para que no se vuelva a seleccionar nuevamente
       
        agregarAmigosLista(ingresaAmigos);                                               // Actualizar la lista de amigos restantes

       } 
    
      

   

   //console.log(ingresaAmigos);  
   

}


function cambiaAnunciosResultado(anuncio){

  let result = document.getElementById("resultado");                           
  result.innerHTML = "";                                                      // Limpia la lista para evitar duplicados
  result.innerHTML += anuncio                                                 //genera el aviso en la etiqueta resultados en el html

  return;

  }
