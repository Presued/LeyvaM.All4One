let askInput1 = document.getElementById("askInput1")
let askInput2 = document.getElementById("askInput2")
let askReturn = document.getElementById("askReturn")
let askBtn = document.getElementById("askBtn")

askBtn.addEventListener("click", function(){
    GetData()
})

function GetData() {

    {
        fetch("https://manuelsallforone.azurewebsites.net/AllFourOne/MiniCh3/" + askInput1.value + "/" + askInput2.value).then(
            response => response.text()).then(
                data => askReturn.textContent = data
            )
    }

}