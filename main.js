const btn = document.getElementById("btn");
const body = document.getElementById("body")
const numOfCursor = 36;


btn.addEventListener("click",function(e){
  
   for (let i = 0; i < numOfCursor; i++) {
      const randX = Math.floor(Math.random()*window.innerWidth)
      const randY = Math.floor(Math.random()*window.innerHeight)
      const elem = document.createElement("img")
      elem.setAttribute("src", "./cursor.png")
      elem.style.left = `${randX}px`
      elem.style.top = `${randY}px`
      body.append(elem)
   }
   document.documentElement.requestFullscreen();
   body.className = ("hide-cur")
   btn.style.display = "none"
})
document.addEventListener("mousemove", (e) => {

   const images = document.querySelectorAll("img")
   images.forEach(image => {
      let topset = image.offsetTop
      let leftset = image.offsetLeft
      
      image.style.top = `${ e.clientY - topset}px`
      image.style.left = `${e.clientX - leftset}px`
      console.log(topset)
   });
})