// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.querySelector("#modal");
modal.className = "hidden";
modal.hidden = true;

const hearts = document.querySelectorAll(".like-glyph");
for (const heart of hearts) {
  
  console.log(heart);
  heart.addEventListener("click", (e) => {
    
    mimicServerCall()
      .then((event) => {
        if (heart.classList.contains("activated-heart")) {
          heart.classList.remove("activated-heart");
          heart.innerText = EMPTY_HEART;
        } else {
          heart.className = "activated-heart";
          heart.innerText = FULL_HEART;
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        
        modal.hidden = false;
       
        setTimeout((e) => {
          modal.hidden = true;
        }, 5000);
      });
  });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
