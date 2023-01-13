let madInput1 = document.getElementById("madInput1")
let madInput2 = document.getElementById("madInput2")
let madInput3 = document.getElementById("madInput3")
let madInput4 = document.getElementById("madInput4")
let madInput5 = document.getElementById("madInput5")
let madInput6 = document.getElementById("madInput6")
let madInput7 = document.getElementById("madInput7")
let madInput8 = document.getElementById("madInput8")
let madInput9 = document.getElementById("madInput9")
let madInput10 = document.getElementById("madInput10")
let madReturn = document.getElementById("madReturn")
let madBtn = document.getElementById("madBtn")

madBtn.addEventListener("click", function(){
    GetData()
})

function GetData() {
   
    {
        fetch("https://manuelsallforone.azurewebsites.net/AllFourOne/MiniCh5/" + madInput1.value + "/" + madInput2.value + "/" + madInput3.value + "/" + madInput4.value + "/" + madInput5.value + "/" + madInput6.value + "/" + madInput7.value + "/" + madInput8.value + "/" + madInput9.value + "/" + madInput10.value).then(
        response => response.text()).then(
            data => madReturn.textContent = data
        )
    
    }
}