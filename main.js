// Defining text for empty and full hearts
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Add event listeners to all like-glyphs
document.querySelectorAll('.like-glyph').forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add('activated-heart');
        } else {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove('activated-heart');
        }
      })
      .catch(error => {
        const modal = document.getElementById('modal');
        const modalMsg = document.getElementById('modal-message');
        modalMsg.textContent = error;
        modal.classList.remove('hidden');
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000);
      });
  });
});

// Provided function to mock server call
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}