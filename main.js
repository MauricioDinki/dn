var x = document.getElementById("email");
var p = document.getElementById("password");

document.getElementById("form").addEventListener("submit",(ee)=>{
    ee.preventDefault();
    console.log(x.value);
    console.log(p.value);
    if(x.value == "hola@hotmail.com" && p.value=="123"){
        swal({
            title: 'Bienvenido',
          html: 'Acceso correcto',
          type:'success'  
            });
    }else{
        swal({
            title: 'Error',
          html: 'Acceso incorrecto',
          type:'error'  
            });
    }

  
});