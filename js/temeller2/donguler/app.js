// i+=2;
// i=i+2;

// while(i<10){

//     if(i==3 || i==5){
//         i++;
//         continue;
//     }
//     // 3 olana kadar kadar yazacak sonra 3 olunca tekrar while başına dönecek
//     console.log(i);
//     i++;
// }


// do{
//     console.log(i);
//     i++;

// }while( i<10 );

// const diller=["c","c++","java","js"];
// let a=0;
// while(a<diller.length){
//     console.log(diller[a]);
//     a++;
// }
// // FOREACH 
// diller.forEach(function(diller,sayisi){
//     console.log(diller,sayisi);
// }); 

// ***************** MAP *******************
const users=[
    {name: "nisa",age: 25},
    {name: "ali",age: 20},
    {name: "ayşe", age: 75},

];
 const names= users.map(function(user){
    return user.name;
 });
 console.log(names);
 const ages= users.map(function(yas){
    return yas.age;
 });
console.log(ages);




//  ****************** FOR İN *************



const user={
    name:"nisa",
    age:20

};

for(let index  in user){
    console.log(index,user[index]);
}


