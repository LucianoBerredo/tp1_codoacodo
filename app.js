function validacion(valor){
  //  valor = document.getElementById("nombre").value;
    let text;

    if(!(/^[a-zA-Z]+$/.test(valor)))
    {
        return false    
    } 
    
    return true
      
}
function controlemail(email){
    if (!(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email))){
        
       return false
}
    return true
}
function inicio(){
    var valor= new Array();
    valor[0]= document.getElementById("nombre").value;
    valor[1]= document.getElementById("apellido").value;
     
    for(i=0; i<valor.length;i++)
    {
       if(!validacion(valor[i])){
            if(i==0){
                window.alert("Ingreso mal el nombre")
            }else{ 
                window.alert("Ingreso mal el apellido")
            }
       }
    }
        if(!controlemail(document.getElementById("email").value)){
            window.alert("El mail es incorrecto")

        }
        
}              