document.addEventListener('DOMContentLoaded', (e) => { 
    const form = document.getElementById('form1');
    const input = document.getElementById('inputEmail');
    form.addEventListener('submit', (e) => {
        const email = input.value;
        let valid = true;

        function val() {
            if (!validEmail(email) || email === "") {
                alert('Ошибка: Введите корректный электронный адрес');
                valid = false;
            }
    
            if (!valid) {
                e.preventDefault();
            } else {
                alert('Успешная регистрация');
            }
        }

        function validEmail(value) {
            const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return pattern.test(input.value);
        }
    });
});