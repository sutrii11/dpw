console.log ("Hello")

const a = document.querySeletorAll ("a");
for (let i=0; i<a.length; i++) {
    a{i}.style.color= "salmon";
    a{i}.style.FontFamily= "times new roman";
    a{i}.style.fontSize= "20px";
}

var judul = document.querySelector(".heading1");
judul.innerHTML="Welcome!!!";
judul.style.fontSize="70px";
judul.style.fontFamily="times new roman";
judul.style.marginBottom= "60px";
judul.style.color="pink";

const p = document.getElementsByTagName ('P')
P{0}.style.color= "blue";

const column = document.getElementsByClassName ("column");
column{0}.style.background="pink";
column{1}style.backgroundColor="pink";

const h2 = document.getElementsByTagName("h2")
h2{0}.style.color="lightcoral";
h2{1}style.color="lightcoral";

const h2 = document.getElementsById("sub")
h2{0}.style.color="lightcoral";
h2{1}style.fontSize="25px";

const h3 = document.getElementsById("right")
h3{0}.style.color="lightcoral";
h3{1}style.fontSize="25px";

const rightcolums = document.getElementsByClassName('rightcolumn');
rightcolums{0}.style.backgroundColor= "lightcoral";
rightcolums{1}.style.backgroundColor= "lightcoral";