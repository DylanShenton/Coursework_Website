
function scroll(){
  console.log("Width: "+window.visualViewport.width)
  console.log("Height: "+window.visualViewport.height)
  var box = document.getElementById('bx');
  var pog = document.getElementById('polygon');
  var amt = -window.scrollY
  box.style.top = amt-500+"px";
  pog.style.top = amt+300+"px";
  document.getElementById("cont").style.top = 970-(window.visualViewport.width/5)+"px"
  document.getElementById("cont").style.scale = window.visualViewport.width/1519
}
window.addEventListener("load", function(){
  scroll()
})
document.addEventListener("scroll",scroll);
window.addEventListener("resize",scroll);
function link(){
window.location.href = "Home.html";
}
function link1(){
  window.location.href = "home(open).html";
}
function link2(){
  window.location.href = "Staff.html";
}
function link3(){
  window.location.href = "Jobs.html";
}
function link4(){
  window.location.href = "About.html";
}

function menu(){
  const opener = document.getElementById("opener")
  const title = document.getElementById("title")
  const bar = document.getElementById("bar")
  if (opener.innerHTML == "▼") {
      opener.innerHTML = "▲";
      title.classList.add("white-text");
      title.classList.remove("Title");
      bar.style.top = "0px"}
  else if (opener.innerHTML == "▲") {
      opener.innerHTML = "▼";
      title.classList.remove("white-text");
      title.classList.add("Title");
      bar.style.top = "-80px"}}

      function submit() {
        if (document.getElementById("nmi").value != "" &&
            document.getElementById("emi").value != "" &&
            (document.getElementById("Radio1").checked ||
             document.getElementById("Radio2").checked ||
             document.getElementById("Radio3").checked)) {
                document.getElementById("terms").remove();
                document.getElementById("thx").innerHTML = "Thanks for applying we will email with more details";
        }
    }
    var stack = ["image1","image2","image3","image4","image5","image6","image7","image8","image9"]
    var data = [
    [0,0,1,1,90,0],
    [-200,0,0.8,0.9,80,2],
    [-400,0,0.6,0.9,70,3],
    [-500,0,0.5,0.9,60,4],
    [-600,0,0.4,0.8,10,5],
    [600,0,0.4,0.8,20,5],
    [500,0,0.5,0.9,30,4],
    [400,0,0.6,0.9,40,3],
    [200,0,0.8,0.9,50,2]
    ]
    function clicked1() {
        stack = [stack[1],stack[2],stack[3],stack[4],stack[5],stack[6],stack[7],stack[8],stack[0]]
        for (let i = 0; i < stack.length; i++) {
            item = document.getElementById(stack[i])
            item.style.left = data[i][0]+"px";
            item.style.top = data[i][1]+"px";
            item.style.scale = data[i][2];
            item.style.zIndex = data[i][4];
            item.style.filter = "blur("+data[i][5]+"px)";
        }
    }
    function clicked2() {
        stack = [stack[8],stack[0],stack[1],stack[2],stack[3],stack[4],stack[5],stack[6],stack[7]]
        for (let i = 0; i < stack.length; i++) {
            item = document.getElementById(stack[i])
            item.style.left = data[i][0]+"px";
            item.style.top = data[i][1]+"px";
            item.style.scale = data[i][2];
            item.style.zIndex = data[i][4];
            item.style.filter = "blur("+data[i][5]+"px)";
        }
    }
    window.addEventListener("load", function(){
        clicked1()
      });
    
      