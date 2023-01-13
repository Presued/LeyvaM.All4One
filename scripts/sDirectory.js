let studInput1 = document.getElementById("studInput1")
let studReturn = document.getElementById("studReturn")
let studBtn = document.getElementById("studBtn")

studBtn.addEventListener("click", function(){
    GetData()
})

function GetData() {
   
    {
        fetch("https://manuelsallforone.azurewebsites.net/AllFourOne/GetStudentByFirstName/" + studInput1.value).then(
        response => response.text()).then(
            data => studReturn.textContent = data
        )
    
    }
}