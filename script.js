document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.hamburger');
    const hiddencontent = document.querySelector('.hidden');
  
    button.addEventListener('click', dropdown);
  
    function dropdown() {
      hiddencontent.classList.toggle('visible');
    }
  });
