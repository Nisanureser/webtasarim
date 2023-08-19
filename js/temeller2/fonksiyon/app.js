
// function merhaba(name ,age){
//     console.log('isim: ${name}');

// }
// merhaba("murat",45);
// merhaba();

// FUNCTİON EXPRESSİON
const nisa =function(name){
    console.log("merhaba"+ name );
};
nisa("nisa");


// ımmediately function expression  ııfe
(function(name,age){
    console.log("merhaba,"+ name+ age);
})("murat", 25 );

const database={

    host:"nisa",
    add: function(){
        console.log("eklendi");
    },
    get : function(){
        console.log("elde edildi");
    },
    update : function(id){
        console.log('Id: ${id} güncellendi')
    },
}

console.log(database.host );
console.log(database.get());
database.update(5);