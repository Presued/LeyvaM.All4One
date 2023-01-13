let rEInput1 = document.getElementById("rEInput1")
let rEReturn = document.getElementById("rEReturn")
let rEBtn = document.getElementById("rEBtn")

rEBtn.addEventListener("click", function(){
    GetData()
})

function GetData() {
   
    {
        fetch("https://manuelsallforone.azurewebsites.net/AllFourOne/MiniCh6/" + rEInput1.value).then(
        response => response.text()).then(
            data => rEReturn.textContent = data
        )
    
    }
}