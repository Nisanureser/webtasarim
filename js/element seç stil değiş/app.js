const element =document.querySelector("#clear-todos");

//element özellikleri

console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[1]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);
console.log(element.style);
//style(css özelliklerini değişme )
element.className="btn btn-success";
element.style.color="pink";
element.style.margin="30px";
element.href="https://www.google.com.tr";
element.target="-blank";

element.textContent="dene bakalim"
element.innerHTML="<span style ='color:green'> sil<span>"



console.log(element);