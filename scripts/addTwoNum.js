let addInput1 = document.getElementById("addInput1")
let addInput2 = document.getElementById("addInput2")
let addReturn = document.getElementById("addReturn")
let addBtn = document.getElementById("addBtn")

addBtn.addEventListener("click", function(){
    GetData()
})

function GetData() {
   
    {
        fetch("https://manuelsallforone.azurewebsites.net/AllFourOne/MiniCh2/" + addInput1.value + "/" + addInput2.value).then(
        response => response.text()).then(
            data => addReturn.textContent = data
        )
    
    }
}