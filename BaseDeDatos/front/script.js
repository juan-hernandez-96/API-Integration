function consultar(){

fetch("http://localhost:3000/api/usuarios")

.then(res=>res.json())

.then(datos=>{

let html="";

datos.forEach(usuario=>{

html+=`

<p>

<b>${usuario.nombre}</b>

<br>

${usuario.correo}

</p>

`;

});

document.getElementById("resultado").innerHTML=html;

});

}