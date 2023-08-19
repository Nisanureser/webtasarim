let a;

const numbers1=[15,75,7,8,85];
// const numbers= new Array [1,5,87,854];
const diller= ["c","c++","java"];

a=numbers1.length;
a=numbers1[2];
// index değer değiştirme
numbers1[2]=58;
a=numbers1;
console.log(a);

// index of 
a=numbers1.indexOf(58);
console.log(a);

// arreyin sonun adeğer eklemek push 
numbers1.push(200);
a=numbers1;
console.log(a);
// arreyin başına adeğer eklemek push 
numbers1.unshift(300)
a=numbers1;
console.log(a);
// sonundan değer atma pop 
numbers1.pop()
a=numbers1;
console.log(a);
// sonundan değer atma pop 
numbers1.shift()
a=numbers1;
console.log(a);
// bbelli yerden bi yere kadar değer silme 
numbers1.splice(0,2)
a=numbers1;
console.log(a);

// ters çevirme reverse
numbers1.reverse(0,2)
a=numbers1;
console.log(a);
// sıralama sort
a=numbers1.sort(function(x,y){
return x-y;
});
console.log(a);

a=numbers1.sort(function(x,y){
    return y-x;
    });
    console.log(a);