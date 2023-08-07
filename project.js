let dropdown = document.getElementById("dropdown");
let image = document.getElementById("show_image");
let description = document.getElementById("show_desc");

dropdown.onchange = function(event) {
    event.preventDefault();
    let choice = dropdown.value;
    if(choice == "none"){
        image.style.display = "none";
    }else if(choice == "p5game") {
        image.src ="p5.png"; 
        image.style.display = "block"
        description.innerHTML = "Week 2 Project: p5 game: https://marvoloheart.github.io/p5_game23/";
        description.style.display = "block"
    }else if(choice == "Interactivesite"){
        image.src = "Mad-Lib.jpg";
        image.style.display = "block";
        description.innerHTML = "Week 3 Project: Mad-Lib site: https://marvoloheart.github.io/User-Input/";
        description.style.display = "block"
    }else if(choice == "Linked-In"){
        image.src = "LinkedIn.png";
        image.style.display = "block";
        description.innerHTML = "My LinkedIn: https://www.linkedin.com/in/aidan-sainte-1a445a284/";
        description.style.display = "block"
    }
}