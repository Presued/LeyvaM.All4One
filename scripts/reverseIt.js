let revInput1 = document.getElementById("revInput1")
let revReturn = document.getElementById("revReturn")
let revBtn = document.getElementById("revBtn")

revBtn.addEventListener("click", function(){
    GetData()
})

function GetData() {
   
    {
        fetch("https://manuelsallforone.azurewebsites.net/AllFourOne/MiniCh7/" + revInput1.value).then(
        response => response.text()).then(
            data => revReturn.textContent = data
        )
    
    }
}