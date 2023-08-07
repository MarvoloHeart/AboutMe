let dropdown = document.getElementById("dropdown");
let image = document.getElementById("show_image");
let description = document.getElementById("show_desc");

dropdown.onchange = function(event) {
    event.preventDefault();
    let choice = dropdown.value;

    if(choice == "immediate_family") {
        image.src ="Family.jpg"; 
    }else if(choice == "extended_family"){
        image.src = "Extended_Family.jpg";
    }
}
