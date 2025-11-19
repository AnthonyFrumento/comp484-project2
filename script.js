$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.kill-button').click(clickedKillButton);
    $('.rename-button').click(clickedRenameButton);
  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {
      name:"Slime Guy", 
      weight: 10, 
      happiness: 10,
      dead: false,
      status: "Healthy",
      message: "Hello!"
    };

    function clickedTreatButton() {
      if (pet_info.dead) return;
      // Increase pet happiness
      pet_info.happiness += 1;
      // Increase pet weight
      pet_info.weight += 1;
      pet_info.message = "Nom!"
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      if (pet_info.dead) return;
      // Increase pet happiness
      pet_info.happiness += 1;
      // Decrease pet weight
      pet_info.weight -= 1;
      pet_info.message = "Wooooooo!"
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      if (pet_info.dead) return;
      // Decrease pet happiness
      pet_info.happiness -= 1;
      // Decrease pet weight
      pet_info.weight -= 1;
      pet_info.message = "I'm tired..."
      checkAndUpdatePetInfoInHtml();
    }

    function clickedKillButton() {
      if (pet_info.dead) return;
      //sets pet to dead
      pet_info.dead = true;
      checkAndUpdatePetInfoInHtml();
    }

    function clickedRenameButton() {
    const newName = prompt("Enter a new name for your pet:");
    if (newName && newName.trim() !== "") {
      pet_info.name = newName.trim();
      checkAndUpdatePetInfoInHtml();
    }
}

  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      //Checks health status
      if (pet_info.weight <= 0 || pet_info.weight >= 30) {
        pet_info.dead = true;
      } else if (pet_info.weight < 5 || pet_info.weight > 20) {
        pet_info.status = "Sick";
        pet_info.message = "I don't feel good..."
        pet_info.happiness = 0;
        const petImage = document.querySelector(".pet-image");
        petImage.src = "images/sick.jpg";
      } else {
        pet_info.status = "Healthy"
        const petImage = document.querySelector(".pet-image");
        petImage.src = "images/pet.jpg";
      }

      //stops happiness below zero or above 100
      if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
      } 
      if (pet_info.happiness > 100) {
        pet_info.happiness =100;
      }
      
      //pet dies
      if (pet_info.dead == true) {
        //stats change to zero
        pet_info.happiness = 0;
        pet_info.weight = 0;
        pet_info.status = "DEAD"
        pet_info.message = "..."
        //change image
        const petImage = document.querySelector(".pet-image");
        petImage.src = "images/dead.jpg";
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.dead').text(pet_info['dead']);
      $('.status').text(pet_info['status']);
      $('.message').text(pet_info['message']);
    }
    
 