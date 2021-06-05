
const resetButton=document.getElementById("resetButton")
const increaseButton=document.getElementById("increaseButton")
const decreaseButton=document.getElementById("decreaseButton")

resetButton.addEventListener("click",()=>{   
    document.querySelector(".value").textContent="0"
})

increaseButton.addEventListener("click",()=>{
    let countValue=parseInt(document.querySelector(".value").textContent)
 
    countValue++;
    document.querySelector(".value").textContent=countValue
})
decreaseButton.addEventListener("click",()=>{
    let countValue=parseInt(document.querySelector(".value").textContent)
    countValue--;
    if(countValue<0)
    alert("Count Value can't be negative")
    else
    document.querySelector(".value").textContent=countValue
})
