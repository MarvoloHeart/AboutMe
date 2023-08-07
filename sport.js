let dropdown = document.getElementById("dropdown");
let image = document.getElementById("show_image");
let description = document.getElementById("show_desc");

dropdown.onchange = function(event) {
    event.preventDefault();
    let choice = dropdown.value;
    if(choice == "none"){
        image.style.display = "none";
    }else if(choice == "wrestling") {
        image.src ="Wrestling.jpg"; 
        image.style.display = "block"
    }else if(choice == "xcountry"){
        image.src = "XCountry.jpg";
        image.style.display = "block";
    }else if(choice == "track"){
        image.src = "Track.jpg";
        image.style.display = "block";
    }
}