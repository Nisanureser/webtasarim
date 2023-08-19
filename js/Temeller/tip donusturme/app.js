// veri tiplerini sitringe dönüştürme
let value;
value=123;
console.log(value);
console.log(typeof value);
value=String(123);
console.log(typeof value);
value=String(function(){console.log()});
console.log(typeof value);
value=(10).toString();
console.log(value);
console.log(typeof value);


// veri tiplerini sayıya dönüştürme
a=Number("123");
console.log(a);
console.log(typeof a);
a=Number(null)
console.log(a);
console.log(typeof a);
a=Number(undefined);
console.log(a);
console.log(typeof a);
// sayıya çevrilmez undifined değişken var ama sayı yok demk
a=Number("hello");
console.log(a);
console.log(typeof a);
a=Number(function(){console.log()});
console.log(a);
console.log(typeof a);
a=Number([1,2,3,4]);
console.log(a);
console.log(typeof a);

a=Number("3.14");
console.log(a);
console.log(typeof a);

a=Number("3");
a=parseFloat("3.14");
console.log(a);
console.log(typeof a);

a=Number("3.14");
a=parseInt("3.14");
console.log(a);
console.log(typeof a);


const m="hello"+24;
console.log(m);
console.log(typeof m);

const   n =Number("12")+(24);
console.log(n);
console.log(typeof n);