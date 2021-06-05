const color=["Navy","blue","Aqua","Teal","Olive","Green","Lime","Yellow"]

const button=document.getElementById("btn")

button.addEventListener("click",()=>{
const backgroundColor=color[getRandomValue()]
    document.body.style.backgroundColor=backgroundColor;
    document.querySelector(".color").textContent=backgroundColor
})

const getRandomValue=()=>{
    return Math.floor((Math.random()*color.length))
}