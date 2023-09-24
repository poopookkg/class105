Webcam.set({
    width:350,
    height:360,
    image_format:"png",
    png_quality:99
});

Webcam.attach("#dbutt1");

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("dbutt2").innerHTML = '<img id = "ibutt" src="' +data_uri +'">';
    })
}

console.log("ml5 version",ml5.version);

cbutt = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aYzuC931q/model.json',modelloaded);

function modelloaded(){
    console.log("model loaded succesfully!!!!!!!!!!!!!!!!!!!!!!!");
}

function check(){
    img = document.getElementById("ibutt");
    cbutt.classify(img,rbutt);
}

function rbutt(error,result){
    if (error) {
        console.log("you have shown a object that can never be idntified on this app");
    } else {
        console.log(result);
        document.getElementById("sbutt1").innerHTML = result[0].label;
        document.getElementById("sbutt2").innerHTML = result[0].confidence.toFixed(3);
    }
}