function turnOff(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function hideButton(x){
    x.remove()
}

function clickFunction(){
    alert("Ninja was liked");
}