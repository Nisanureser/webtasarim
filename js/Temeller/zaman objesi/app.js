let a;
const now = new Date(); //şuanki zmanı alır

const dogumdate= new Date("09-14-2003 06:15:00");
console.log(dogumdate);

a=dogumdate.getMonth(); //0 dan başlıyo
console.log(a);
a=dogumdate.getDate(); // gün 1 den başlıyo
console.log(a);
a=dogumdate.getDay(); // pazar günü haftanın hangi günü -0 pazar -1 pzaratesi
a=dogumdate.getHours();
console.log(a);


// TARİH DEĞİŞTİRME 
dogumdate.setMonth(1);
a=dogumdate;
console.log(a);
dogumdate.setDate(5);
// a=dogumdate;
console.log(a);