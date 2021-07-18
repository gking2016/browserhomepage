var myVar = setInterval(myTimer, 1000);
document.getElementById("modes").innerHTML = `<img  style="height: 20px;" src="./sourses/sun.png"/>`;
// var name = prompt("Enter ur name!");
function myFunction(x) {
  x.classList.toggle("change");
}
// document.getElementById("name").innerHTML = `Hello`+ name
function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  var da= d.getFullYear();
  var dy= d.getDate();
  var dm= d.getMonth()+1;
  var h = d.getHours();
  var m = d.getMinutes();
  if (h<12 ){
    if(h<10){
      if(m<10)
      {document.getElementById("time").innerHTML = "0"+ String(h)+ ":" +"0"+ m + " " +"AM";}
      else{
          document.getElementById("time").innerHTML = "0"+ String(h)+ ":" + m + " " +"AM";
      }
    }
    else{
      if(m<10)
      {document.getElementById("time").innerHTML =  String(h)+ ":" +"0"+ m + " " +"AM";}
      else{
          document.getElementById("time").innerHTML = String(h)+ ":" + m + " " +"AM";
      }
    }
  }
  else{
    if (h-12<10){
        if(m<10)
        {document.getElementById("time").innerHTML = "0"+ String(h-12)+ ":" +"0"+ m + " " +"PM";}
        else{
            document.getElementById("time").innerHTML = h-12+ ":" + m + " " +"PM";
        }
    }
    else{
        if(m<10)
        {document.getElementById("time").innerHTML = String(h-12)+ ":" +"0"+ m + " " +"PM";}
        else{
            document.getElementById("time").innerHTML = String(h-12)+ ":" + m + " " +"PM";
        }
    }
  }
 
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
// document.getElementById("demo").innerHTML = days[d.getDay()];
//   document.getElementById("demo").innerHTML = t;

//birthday wishchecker
var bday = String("July 23 " + da);
var c = months[d.getMonth()] +" " +dy + " " +da;

if ((bday === c) || (bday === "July 232021")){
document.getElementById("demo").innerHTML = "Happy birthday Bhargavi!!"
}
else{
  document.getElementById("demo").innerHTML = "Hello,Bhargavi Reddy!"
}

if (dy<10) 
  {document.getElementById("date").innerHTML = months[d.getMonth()] +" " +"0"+dy + " " +da;}
//   else if (dm<10 && dy>10) 
//   {document.getElementById("date").innerHTML = dy+":"+"0"+dm+":"+da+","+ days[d.getDay()];}
//   else if(dy<10 && dm<10)
//   {document.getElementById("date").innerHTML = "0"+dy+":"+"0"+dm+":"+da+","+ days[d.getDay()];}
  else{
    document.getElementById("date").innerHTML = months[d.getMonth()] +" " + dy + " " +da;
  }
//   document.getElementById("mo").innerHTML = da;
//   document.getElementById("date").innerHTML = da;
document.getElementById("week").innerHTML = days[d.getDay()].slice(0,3);
// document.getElementById("time").innerHTML = t;

}

function myStopFunction() {
  clearInterval(myVar);
}

function myFun(){
  var night = document.getElementById("switch");
  if(night.checked == true){
    document.getElementById("bd").style.backgroundImage = "url(./sourses/ni1.jpg)";
    document.getElementById("modes").innerHTML = `<img  style="height: 20px;" src="./sourses/moon.png"/>`;
    
  }
  else{
    document.getElementById("bd").style.backgroundImage = "url(./sourses/jerry-zhang-ePpaQC2c1xA-unsplash.jpg)";
    document.getElementById("modes").innerHTML = `<img  style="height: 20px;" src="./sourses/sun.png"/>`;
  }
}

// night.addEventListener('click',changebg);

