let name=prompt("Isminizi giriniz: ");
let saveName=document.querySelector("#myName");
saveName.innerHTML= `${name}`;

function time(){

const d = new Date;
let hour = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let day = ["Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi","Pazar"];
let dayName=day[d.getDay()];

let clock=document.querySelector("#myClock");
clock.innerHTML=`${hour}:${minutes}:${seconds} ${dayName}`;
}

setInterval(time,100)