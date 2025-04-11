

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", 
        function (e) {
            // alert("i got clicked!");
            //used to get the innerHTML attributes
            console.log(e.target.innerHTML); // either of the both can be used
            console.log(this.innerHTML); //this is used to show the button that trigger the event
            //or can use this too
            var buttonClicked = e.target.innerHTML

            makeSound(buttonClicked);
            buttonAnimation (buttonClicked);
           
        // this.style.color = "white";
        
        }
    );

    
}

document.addEventListener("keypress", function (event) {

    makeSound(event.key);
    buttonAnimation (event.key);
});

function makeSound (anything) {

    switch(anything) {
        case "w":
          // code block
          var audio = new Audio('./sounds/tom-1.mp3');
          audio.play();
          break;
        case "a":
          // code block
          var audio = new Audio('./sounds/tom-2.mp3');
          audio.play();
          break;
          case "s":
          // code block
          var audio = new Audio('./sounds/tom-3.mp3');
          audio.play();
          break;
          case "d":
          // code block
          var audio = new Audio('./sounds/tom-4.mp3');
          audio.play();
          break;
          case "j":
          // code block
          var audio = new Audio('./sounds/snare.mp3');
          audio.play();
          break;
          case "k":
          // code block
          var audio = new Audio('./sounds/crash.mp3');
          audio.play();
          break;
          case "l":
          // code block
          var audio = new Audio('./sounds/kick-bass.mp3');
          audio.play();
          break;
        default: console.log(buttonClicked);
          // code block
      }       
}

function buttonAnimation (currentKey) {

    document.querySelector("." + currentKey).classList.add("pressed");

   setTimeout(myGreeting, 200);

function myGreeting() {
    document.querySelector("." + currentKey).classList.remove("pressed");
}
}