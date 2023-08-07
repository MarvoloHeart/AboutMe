let dropdown = document.getElementById("dropdown");
let image = document.getElementById("show_image");
let description = document.getElementById("show_desc");

dropdown.onchange = function(event) {
    event.preventDefault();
    let choice = dropdown.value;
    if(choice == "none"){
        image.style.display = "none";
    }else if(choice == "humanities") {
        image.src ="Humanities.jpg"; 
        image.style.display = "block"
    }else if(choice == "chemistry"){
        image.src = "Chemistry.jpg";
        image.style.display = "block";
    }else if(choice == "math"){
        image.src = "Math.jpg";
        image.style.display = "block";
    }
}