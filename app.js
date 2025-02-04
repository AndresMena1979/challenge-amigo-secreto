// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var ingresaAmigos=[];



function agregarAmigo() {

      

    let capturaAmigos= document.getElementById("amigo").value;  //captura los amigos escritos en en la caja de texto

      
    if (capturaAmigos === "")                                 // envia mensaje si la caja de texto esta vacia y dan clic en el boton Añadir
        {
          return alert("Por favor, inserte un nombre." );

    } else
     {
     
        
        if(ingresaAmigos.includes(capturaAmigos)){                //verifica que el amigo no este repetido, y si lo esta, borra el valor en la caja de texto y llama de nuevo a la funcion

        alert ("amigo repetido");                           //genera mensaje que especifica que el amigo introducido esta reducido 

        
        reiniciaCajaTexto();                              //funcion para borrar nombre de la caja de texto 
        

           return agregarAmigo();                        //se llama nuevamente a la funcion para que se pueda agregar otro amigo

        
    }else{                                               // ingresa al nuevo amigo a la lista y lo envia al final de esta


        
        ingresaAmigos.push(capturaAmigos);

       
        reiniciaCajaTexto();                         //funcion para borrar nombre de la caja de texto    
        
        
        
          //console.log(ingresaAmigos);
    }
   } 
 
    
   
   agregarAmigosLista(ingresaAmigos);                 // llama a la funcion agregarElementosLista


}


function agregarAmigosLista(elemento){    //funcion para agregar nombres a una lista en html

    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = "";                                   // Limpia la lista para evitar duplicados 

   for (let i=0; i< elemento.length;i++){                   //  bucle for para recorrer el arreglo ingresaAmigos y crear elementos de lista (<li>) para cada título.
                    
       lista.innerHTML += `<li>${elemento[i]}</li>`;     //+=: "agregar agrega uno por uno los amigos a la lista;

           
   }      
    
        

      
   }



function reiniciaCajaTexto() {                  //funcion para borrar nombre digitado de la caja de texto

    document.getElementById("amigo").value="";

}


