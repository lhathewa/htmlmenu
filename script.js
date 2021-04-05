var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");

var pages = [
  {
    name:"Home",
    content:"Home"
  },
  {
    name:"About",
    content:"About"
  },
  {
    name:"Interact",
    content:""
  }
]



for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}

function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  display.innerHTML="";
  if(pg!=="About"){
    display.innerHTML=wd;
  }else{
    About()
  }
  
}

function About(){
  var header = document.createElement("h1");
  header.innerHTML="About";
  display.appendChild(header);
    var header = document.createElement("h3");
  header.innerHTML="Lane";
  display.appendChild(header);
  
  var count=0;
  document.body.querySelector(".counter").innerHTML=count;
  document.body.querySelector(".butt").addEventListener("click",function(){
    count=count+1;
    document.body.querySelector(".counter").innerHTML=count;
  })
    
}




contentWrite(pages[0].content, "Home");