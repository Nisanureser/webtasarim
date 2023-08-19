const name = "nisa"
const surname="eser";
const maas=100;

const a= "isim:"+ name + "\n"+"soyad:"+ surname;
console.log(a);

 const b= `isim:${name}\nsurname:${surname}\nmaas:${maas}`
 console.log(b);


//  const html= "<ul>"+
//              "<li>"+ name + "</li>"+
//              "<li>"+ surname + "</li>"+
//              "<li>"+ maas + "</li>"+
//              "</ul>";
//  document.body.innerHTML=html;

function ax(){

    return "merhaba";
}

const html2=`
            <ul>
                <li>${name}</li>  
                <li>${surname}</li>  
                <li>${maas}</li> 
                <li> ${10/4}</li>
                <li> ${ax()}</li>
            </ul>
            `;

document.body.innerHTML=html2;