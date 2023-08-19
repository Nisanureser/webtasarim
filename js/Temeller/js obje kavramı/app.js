const programmer={
name:"nisa",
age:20,
langs:["c","c++","java"],
adres:{
    şehir:"ist",
    street:"velibaba"
},
    work: function(){

    console.log("çalışıyo");
}
}
a=programmer;
a=programmer.name;
console.log(a);
a=programmer["name"];
console.log(a);
a=programmer.adres.şehir;
console.log(a);
programmer.work();

const anket=[
    {name: "nisa",age:5},
    {name: "ali" },
    {name: "ayşe" },
    {name: "ada" },
];
a=anket[0].age;
console.log(a);

