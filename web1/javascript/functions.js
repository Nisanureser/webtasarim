
var degisken='deger'
function sayiUret(ustLimit) {
    console.log(degisken)
    return Math.ceil(Math.random() * ustLimit)
}
sayiUret()

var sayi1 = Math.ceil(Math.random() * 49)
var sayi2 = Math.ceil(Math.random() * 59)
var sayi3 = sayiUret(5)
console.log('sayilar: ' + sayi1 + ' ' + sayi2 + ' ' + sayi3)