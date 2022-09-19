d3.select("#SunshineOing")
  .on("click",Click)


function Click(){
  if (this.getAttribute("id") == "SunshineOing"){
    this.remove()
  }
}