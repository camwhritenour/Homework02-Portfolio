var img1El = document.querySelector("#prj1");

var emailbtnEl = document.querySelector('#emailbtn')
var gitbtnEl = document.querySelector('#gitbtn')
var linkedbtnEl = document.querySelector('#linkedbtn')

var mainProjectURL = 'https://camwhritenour.github.io/Foodr/'

function copytoClip() {
    var copyText = document.getElementById("emailbtn");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}

img1El.addEventListener("click", function (event) {
    var element = event.target;
    window.open(mainProjectURL)
})

emailbtnEl.addEventListener("click", function (event) {
    var element = event.target;
    navigator.clipboard.writeText("whritenourc@outlook.com");
    alert("Copied Email to Clipboard.");

})


gitbtnEl.addEventListener("click", function (event) {
    var element = event.target;
    window.open("https://github.com/camwhritenour")
})

linkedbtnEl.addEventListener("click", function (event) {
    var element = event.target;
    window.open("https://www.linkedin.com/in/cameron-whritenour/")
})
