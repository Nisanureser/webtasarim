let a; 
const isim="nisa";
const lastname="Eser";

const diller="c,c++,c#"

a=isim+lastname;
console.log(a);

a=isim+ " " +lastname;
console.log(a);

a=isim+"eser";
console.log(a);

// length kaç harfli uzunluğu
a=lastname.length;
console.log(a);



// ekleme yapar concat
a=lastname.concat(" ",lastname," ceren");
console.log(a);

// KÜÇÜK HARF YAPAR HEPSİNİ
a=lastname.toLowerCase();
console.log(a);

// BÜYÜK HARF YAPAR HEPSİNİ
a=lastname.toUpperCase();
console.log(a);

a=lastname[0];
console.log(a);
a=lastname[3];
console.log(a);
a=lastname[lastname.length-1];
console.log(a);


// ındex of a nerede değer yoksa -1 döner
 a=isim.indexOf("a");
 console.log(a);

//  char at 
a=isim.charAt(0);
console.log(a); 

// split parçalıyor
a=diller.split(",");
console.log(a);

// replace yer değiştirme
a=diller.replace("c","JAVA")
// c yerine JAVA koyuldu
console.log(a);

// ıncludes
a=diller.includes("c++");
// c++ diller arasında bulursa true döner
console.log(a);