var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "blue";
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

function drawPattern() {
    var canvas = document.getElementById("myCanvas2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";

    var img = new Image();
    img.src = "../../images/week8/bike_sprite.png";
    img.onload = function () {
        var pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(10, 10, 100, 100);
        context.strokeRect(10, 10, 100, 100);
    };

}

drawPattern();

function drawGradient() {
    var canvas = document.getElementById("myCanvas3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    context.fillStyle = gradient;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
}

drawGradient();

function drawCircle(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI * 2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill();
    context.stroke();

}

drawCircle(document.getElementById("myCanvas4"));
drawCircle(document.getElementById("myCanvas5"));

function saveDrawing() {
    var canvas5 = document.getElementById("myCanvas5");
    window.open(canvas5.toDataURL("image/png"));
}

var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);

window.addEventListener("load", drawImageToCanvas, false);

function drawImageToCanvas() {
    var canvas = document.getElementById("myCanvas6");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 50, 50);
    var imageData = context.getImageData(0, 0, 1, 1);
    var pixelData = imageData.data;
    console.log(pixelData.length);
}

function manipulateImage() {
    var canvas = document.getElementById("myCanvas7");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 68, 68);
    var imageData = context.getImageData(0, 0, 200, 200);

    for (var i = 0; i < imageData.data.length; i += 4) {
        var red = imageData.data[i];
        var green = imageData.data[i + 1];
        var blue = imageData.data[i + 2];

        var grayscale = red * 0.3 + green * 0.59 + blue * 0.11;

        imageData.data[i] = grayscale;
        imageData.data[i + 1] = grayscale;
        imageData.data[i + 2] = grayscale;
    }
    context.putImageData(imageData, 0, 0);
}

manipulateImage();


var mice = document.querySelector("#mouseContainer img");
var mouse = null;
for (var i = 0; i < mice.length; i++) {
    mouse = mice[i];
    mouse.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData("text/plain", this.id);
    })
}

var cat = document.getElementById("cat");
cat.addEventListener("dragover", function (event) {
    event.preventDefault();
});

cat.addEventListener("drop", function (event) {
    var mouseHash = {
        mouse1: 'Dragged correctly'
    };
    var catHeading = document.getElementById('catHeading');
    var mouseID = event.originalEvent.dataTransfer.getData("text/plain");
    catHeading.innerHTML = mouseHash[mouseID];
    event.preventDefault();

});
