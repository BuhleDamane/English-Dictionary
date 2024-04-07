let now = new Date();
let displayTime = document.querySelector(".displayTime");

let date = now.getDate();


let year = now.getFullYear();

let months = ["January", "February", "March", "April", "May", "June", "July" , "August", "September", "October", "November", "December"]
let month = months[now.getMonth()];

displayTime.innerHTML = `${date} ${month} ${year}`
