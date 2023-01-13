let gtoInput1 = document.getElementById("gtoInput1")
let gtoInput2 = document.getElementById("gtoInput2")
let gtoReturn = document.getElementById("gtoReturn")
let gtoBtn = document.getElementById("gtoBtn")

gtoBtn.addEventListener("click", function(){
    GetData()
})

function GetData() {
   
    {
        fetch("https://manuelsallforone.azurewebsites.net/AllFourOne/MiniCh4/" + gtoInput1.value + "/" + gtoInput2.value).then(
        response => response.text()).then(
            data => gtoReturn.textContent = data
        )
    
    }
}