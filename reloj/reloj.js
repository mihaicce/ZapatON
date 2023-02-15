// function startTime(){
//     today=new Date();
//     h=today.getHours();
//     m=today.getMinutes();
//     s=today.getSeconds();
//     m=checkTime(m);
//     s=checkTime(s);
//     document.getElementById('reloj').innerHTML=h+":"+m+":"+s;
//     t=setTimeout('startTime()',500);}
//     function checkTime(i)
//     {if (i<10) {i="0" + i;}return i;}
//     window.onload=function(){startTime();}



function startTime() {
     var today = new Date();
     var hr = today.getHours();
     var min = today.getMinutes();
     var sec = today.getSeconds();
     ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
     hr = (hr == 0) ? 12 : hr;
     hr = (hr > 12) ? hr - 12 : hr;
     //Add a zero in front of numbers<10
     hr = checkTime(hr);
     min = checkTime(min);
     sec = checkTime(sec);
     document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
     
     var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
     var days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
     var curWeekDay = days[today.getDay()];
     var curDay = today.getDate();
     var curMonth = months[today.getMonth()];
     var curYear = today.getFullYear();
     var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
     document.getElementById("date").innerHTML = date;
     
     var time = setTimeout(function(){ startTime() }, 500);
 }
 function checkTime(i) {
     if (i < 10) {
         i = "0" + i;
     }
     return i;
 }
 
 
 
 window.onload = startTime();


//  PopUP


const modelbox = document.getElementById('modelbox1')



  document.onmouseleave = function(){
    
      modelbox.style.display = "block"
  }

  function closemodel() {
    modelbox.style.display = "none"
  }

//   if (!localStorage.getItem('first-time')){
//     setTimeout(showPopup, 1000);
//     localStorage.setItem('first-time',1);
//   }