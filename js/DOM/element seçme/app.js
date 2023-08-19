//elementi id göre seç 
let elementi;

elementi=document.getElementById("todo-form");    
//elementi clasa göre seç 

elementi=document.getElementsByClassName("list-group-item");

elementi=document.getElementsByTagName("div");
//query selector tek bir tanesini alıyor en baştakini 
elementi=document.querySelector("#todo-form");

elementi=document.querySelector(".list-group-item");
//query selectorALL hepsini tanesini alıyor en baştakini 
elementi=document.querySelectorAll("#todo-form");
elementi=document.querySelectorAll(".list-group-item");
elementi.forEach(function(isim) {
    console.log(isim);
    
});

//console.log(elementi);





