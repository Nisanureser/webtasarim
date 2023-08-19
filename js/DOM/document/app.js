// window Object
// console.log(this);
let value;
value=document;
value=document.all;
value=document.all.length;
value=document.all[5];
console.log(value);

const elements=document.all; //html collection
// foreach döngüsü için dizi obje array olması lazım diğer türlü tip kabul etmiyo


// dizi değilse objeye çevirmek için 
const ceviriyorum=Array.from(document.all);
// çevirmiş olduk

ceviriyorum.forEach(function(göster){
    console.log(göster);
});


value=document.all[8];
value=document.body;
value=document.head;
value=document.location;
value=document.location.hostname;
console.log(value);

value=document.URL;
value=document.characterSet;
console.log(value);