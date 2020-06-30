var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.querySelector("body");

   

function setbac(){
    body.style.background="linear-gradient(to right, " +color1.value+", "+color2.value+") ";
    css.textContent=body.style.background +";";
}

color1.addEventListener("input",setbac);



color2.addEventListener("input",setbac);



    var button=document.querySelector("button");
    button.addEventListener("click",btn);
  function btn(){
    var letters = "0123456789ABCDEF"; 
  
    // html color code starts with # 
    var color = '#'; 

    // generating 6 times as HTML color code consist 
    // of 6 letter or digits 
    for (var i = 0; i < 6; i++) {
       color += letters[(Math.floor(Math.random() * 16))]; 
    }
body.style.background='#'+(Math.random()*0xFFFFFF<<0).toString(16);
button.style.background='#'+(Math.random()*0xFFFFFF<<0).toString(16);

  }