let value;
value=document; 


// scriptlerde app.js nerde önemli
value=document.scripts; 
value=document.scripts.length; 
console.log(value);

// linkler
value=document.links; 
value=document.links.length; 
value=document.links[document.links.length-1]; 


// **************   CLASS ÖZELLİKLERİNİ ÇAĞIRIR 3 YÖNTEMDE *****************
value=document.links[document.links.length-1].getAttribute("class");
console.log(value);
value=document.links[document.links.length-1].className;
console.log(value);
value=document.links[document.links.length-1].classList;
console.log(value);

// FORMLAR
value=document.forms; 
console.log(value);
value=document.forms.length; 
console.log(value);
value=document.forms["form"]; 
// id isteme
value=document.forms[0].id; 
value=document.forms[0].getAttribute("id"); 
// name
value=document.forms[0].name; 
value=document.forms[0].getAttribute("name"); 



value=document.forms[0].method; 








console.log(value);