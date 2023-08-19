// alert("pencere");
// console.log(this.alert("aaa"));
// console.log(window);

// const cevap=confirm("emin misiniz?");
// console.log(cevap);


// ****************************************
// if(confirm("emin misiniz?")) {
    
//     console.log("silin gitsin");
// }
// else {
//   console.log("silmeyin");
// }



// ******************************************
// const cvp=prompt("2+2=?");
// console.log(cvp);
// console.log(typeof(cvp));

let value;
value=window;
value=window.location;
value=window.location.host;
value=window.location.hostname;
value=window.location.port;
value=window.location.href;

// ********************************************
// if(confirm("sayfa yenilensin mi?")){
//     window.location.reload();
// }

// else{
//     console.log("sayfa yenilenmedi");
// }
// console.log(value);

value=window.outerHeight; 
// pencerenin uzunluğu piksel cinsinden
value=window.outerWidth;
// pencerenin genişliği
value=window.innerHeight;
// pencerenin uzunluğu ama sadece ekran console kısımları üst kısımları hariç
value=window.scrollX;
// skrolu x ekseninden ne kadar ilerlettiğimiz.
console.log(value);



