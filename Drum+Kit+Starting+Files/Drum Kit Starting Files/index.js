

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", 
        function (e) {
            // alert("i got clicked!");
            //used to get the innerHTML attributes
            console.log(e.target.innerHTML); // either of the both can be used
            console.log(this.innerHTML); //this is used to show the button that trigger the event
            //or can use this too
            var buttonClicked = e.target.innerHTML
            switch(buttonClicked) {
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
        this.style.color = "white";
        document.addEventListener("keypress", function (e) {
            console.log("keypress");
        })
        
        }
    )
}