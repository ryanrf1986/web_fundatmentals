console.log("page loaded...");

window.onload = function() {
    var oTextbox = document.getElementById('myTextBox');
    for (var i = 0; i < document.images.length; i++) {
        var image = document.images[i];
        if (image.className === "icon-s" || image.className.indexOf("icon-s ") >= 0 || image.className.indexOf(" icon-s") >= 0) {
            image.onclick = function() {
                oTextbox.value = this.alt;
            };
        }
    }
};​

var h1 = document.querySelector()