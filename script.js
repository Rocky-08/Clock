'use strict';

let hour = document.querySelector('.hours');
let min = document.querySelector('.minutes');
let sec = document.querySelector('.seconds');
let main_box = document.querySelector('.main');

let date = new Date();
let currHour = date.getHours();
let currMinutes = date.getMinutes();
let currSec = date.getSeconds();

let mainContent = () => {
    let html = ` <div class="main-info">
    <div class="week box">
      ${(date.toLocaleString('en-US',{weekday: 'long'})).slice(0,3)}
    </div>

    <div class="date box">
      ${date.getDate()} ${date.toLocaleString('en-US',{month: 'long'}).slice(0,3)}
    </div>

      <div class="year box">
       ${date.getFullYear()}
      </div>`;

      main_box.insertAdjacentHTML("afterbegin" , html); 
}

mainContent();  

/* console.log((date.toLocaleString('en-US' , {weekday:'long'})).slice(0,3)); */
let changeTime = () => {


    currSec++;
    
    if(Number(currSec) == 60)
    {
        currSec = 1;
        currMinutes++;
    }
    
    if(Number(currMinutes) == 60)
    {
        currMinutes = 0;
        currHour++;
    }

    if(Number(currHour) == 24)
    {
        currHour = 0;
    }

    
    
    hour.textContent = (currHour.toString().length == 1? '0' : '') + currHour;
    min.textContent = (currMinutes.toString().length == 1? '0' : '') + currMinutes;
    sec.textContent = (currSec.toString().length == 1? '0' : '') + currSec; 

}

setInterval(changeTime,1000);