function showD() {
    console.log("ejecutando");
    var dropD = document.getElementById("drop_down_service");
    dropD.classList.remove("none")
    dropD.classList.add("drop_down_service");
}

function hideD() {
    console.log("ejecutando");
    var dropD = document.getElementById("drop_down_service");
    dropD.classList.remove("drop_down_service");
    dropD.classList.add("none")
}

