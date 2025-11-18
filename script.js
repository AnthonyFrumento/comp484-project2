$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.kill-button').click(clickedKillButton);

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {
      name:"My Pet Name", 
      weight: 10, 
      happiness: 10,
      dead: false
    };

    function clickedTreatButton() {
      if (pet_info.dead) return;
      // Increase pet happiness
      pet_info.happiness += 1;
      // Increase pet weight
      pet_info.weight += 1;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      if (pet_info.dead) return;
      // Increase pet happiness
      pet_info.happiness += 1;
      // Decrease pet weight
      pet_info.weight -= 1;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      if (pet_info.dead) return;
      // Decrease pet happiness
      pet_info.happiness -= 1;
      // Decrease pet weight
      pet_info.weight -= 1;
      checkAndUpdatePetInfoInHtml();
    }

    function clickedKillButton() {
      if (pet_info.dead) return;
      //sets pet to dead
      pet_info.dead = true;
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      //checks if overweight
      if (pet_info.weight >= 30) {
        pet_info.dead = true;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.dead').text(pet_info['dead']);

      //dead pet
      if (pet_info.dead == true) {
        //stats change to zero
        pet_info.name = "DEAD"
        pet_info.happiness = 0;
        pet_info.weight = 0;
        //change image
        const petImage = document.querySelector(".pet-image");
        petImage.src = "images/dead.jpg";
        checkAndUpdatePetInfoInHtml();
      }
    }
    
 