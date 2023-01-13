let restInput1 = document.getElementById("restInput1")
let restInput2 = document.getElementById("restInput2")
let restInput3 = document.getElementById("restInput3")
let restReturn = document.getElementById("restReturn")
let restBtn = document.getElementById("restBtn")

restBtn.addEventListener("click", function(){
    GetData()
})

function GetData() {
   
    {
        fetch("https://manuelsallforone.azurewebsites.net/AllFourOne/pick/" + restInput1.value + "/" + restInput2.value + "/" + restInput3.value).then(
        response => response.text()).then(
            data => restReturn.textContent = data
        )
    
    }
}
