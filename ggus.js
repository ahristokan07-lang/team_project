const button = document.getElementById('button');

button.addEventListener('click', function() {
            if (button.style.backgroundColor === 'red') {
                button.style.backgroundColor = '#007bff';
                button.style.color = 'white';
            } else {
                button.style.backgroundColor = 'red';
                button.style.color = 'white';
            }
        });