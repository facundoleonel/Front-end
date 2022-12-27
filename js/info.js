const datos={name:"John",
            email:"jhon@gmail.com",
            birth:"28/12/1990",
            direction:"Avenida San Lorenzo",
            phone:"(345)4567328"
        };

document.getElementById('name').onclick=function(){
    console.log("capturamos el evento click");
    document.getElementById("nombre").innerHTML=datos.name;
}

document.getElementById('email').onclick=function(){
    console.log("capturamos el evento click");
    document.getElementById("correo").innerHTML=datos.email;
}

document.getElementById('birth').onclick=function(){
    console.log("capturamos el evento click");
    document.getElementById("fecha").innerHTML=datos.birth;
}

document.getElementById('direction').onclick=function(){
    console.log("capturamos el evento click");
    document.getElementById("ubicacion").innerHTML=datos.direction;
}

document.getElementById('phone').onclick=function(){
    console.log("capturamos el evento click");
    document.getElementById("telefono").innerHTML=datos.phone;
}