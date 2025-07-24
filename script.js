document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.getElementById("typing");
    const words = ["A Web Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let typingDelay = 150;
    let erasingDelay = 100;
    let newWordDelay = 2000;
  
    function type() {
      if (charIndex < words[wordIndex].length) {
        typingElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newWordDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingDelay);
      }
    }
  
    type();
  });
  