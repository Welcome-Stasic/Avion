
   const form = document.querySelector('form');
   const input = document.querySelector('input');
   const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
       let valid = true;
       function onInput() {
         if (isEmailValid(input.value)) {
           input.style.borderColor = '#b6e3bd';
         } else {
           input.style.borderColor = '#e3b6b6';
         }
       }

       input.addEventListener('input', onInput);

       function isEmailValid(value) {
         return pattern.test(value);
         }
      


