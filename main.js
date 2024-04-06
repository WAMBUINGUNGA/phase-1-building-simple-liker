// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener('DOMContentLoaded', function() {
  const errorModal = document.getElementById('modal');
  errorModal.classList.add('hidden'); // Add the .hidden class to the error modal

  const hearts = document.querySelectorAll('.like-glyph');

  hearts.forEach(heart => {
      heart.addEventListener('click', function() {
          mimicServerCall()
              .then(() => {
                  // Server returns success
                  heart.classList.add('activated-heart'); // Change the heart to a full heart
              })
              .catch(() => {
                  // Server returns failure
                  errorModal.classList.remove('hidden'); // Display the error modal
                  const errorMessage = document.getElementById('modal-message');
                  errorMessage.textContent = 'Server Error'; // Display the server error message
                  setTimeout(() => {
                      errorModal.classList.add('hidden'); // Hide the modal after 3 seconds
                  }, 3000);
              });
      });
  });
});

function mimicServerCall() {
  return new Promise((resolve, reject) => {
      const randomNum = Math.random();
      setTimeout(() => {
          if (randomNum < 0.5) {
              resolve('Success');
          } else {
              reject('Error');
          }
      }, 300);
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
