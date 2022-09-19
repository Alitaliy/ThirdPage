d3.select("#SunshineC")
  .on("click",Click)


function Click(){
  if (this.getAttribute("id") == "SunshineC"){
    this.remove()
    drawSunshine_Lv()
  }

  if (this.getAttribute("id") == "Sunshine_Lv"){
    this.remove()
    drawSunshine_Lan()
  }

  if (this.getAttribute("id") == "Sunshine_Lan"){
    this.remove()
    drawSunshine_Zi()
  }

  if (this.getAttribute("id") == "Sunshine_Zi"){
    this.remove()
    drawSunshine_Fen()
  }

  if (this.getAttribute("id") == "Sunshine_Fen"){
    this.remove()
    drawSunshine_Open()
  }

  if (this.getAttribute("id") == "Sunshine_Open"){
    this.remove()
  }
}

// function drawSunshine_Lv(){
//   d3.select("#Sunimage")
//   .append("img")
//   .attr("id","Sunshine_Lv")
//   .attr("src","./lib/images/Sunshine-Lv.png")
//   .on("click",Click)
// }

function drawSunshine_Lv(){
  d3.select("#Sunimage")
  .append("img")
  .attr("id","Sunshine_Lv")
  .attr("src","./lib/images/Sunshine-Lv.png")
  .on("click",Click)

  d3.select("#Lv")
    .attr("style","background-color: rgba(143,241,190,0.7);box-shadow:  13px 13px 35px #777777,-13px -13px 35px #ffffff")
    .text("姓名：王科")
}

function drawSunshine_Lan(){
  d3.select("#Sunimage")
  .append("img")
  .attr("id","Sunshine_Lan")
  .attr("src","./lib/images/Sunshine-Lan.png")
  .on("click",Click)

  d3.select("#Lan")
  .attr("style","background-color: rgba(128,190,247,0.7);box-shadow:  13px 13px 35px #777777,-13px -13px 35px #ffffff")
  .text("班级：计算机科学与技术203班")
}

function drawSunshine_Zi(){
  d3.select("#Sunimage")
  .append("img")
  .attr("id","Sunshine_Zi")
  .attr("src","./lib/images/Sunshine-Zi.png")
  .on("click",Click)

  d3.select("#Zi")
  .attr("style","background-color: rgba(226,126,242,0.7);box-shadow:  13px 13px 35px #777777,-13px -13px 35px #ffffff")
  .text("学号：20101080314")
}

function drawSunshine_Fen(){
  d3.select("#Sunimage")
  .append("img")
  .attr("id","Sunshine_Fen")
  .attr("src","./lib/images/Sunshine-Fen.png")
  .on("click",Click)

  d3.select("#Fen")
  .attr("style","background-color: rgba(255,87,183,0.7);box-shadow:  13px 13px 35px #777777,-13px -13px 35px #ffffff")
  .text("联系电话：15928035579")
}

function drawSunshine_Open(){
  // d3.select("#Sunimage")
  // .append("img")
  // .attr("id","Sunshine_Open")
  // .attr("src","./lib/images/Sunshine_Open.png")
  // .on("click",Click)

  d3.select("#Sunimage")
    .append("img")
    .attr("width",500)
    .attr("height",750)
    .attr("src","./lib/images/Myself.png")

}