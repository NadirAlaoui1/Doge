function changeText(){

    var text = document.getElementById('doge').innerHTML = "WOOF WOOF!"
}

function defaultText(){

    var text = document.getElementById('doge').innerHTML = "WOOF!"
}

window.onload = function(){

    document.getElementById("doge").innerHTML = "WOOF!";
}
var image = document.getElementById("dogepng");
var button = document.getElementById("doge");

button.onclick = function(){

    if(dogepic.className == "clicked"){
        dogepic.className = "";
    } else{
        dogepic.className = "clicked";
    }

};