const icons = document.querySelectorAll('.icon');

    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.nextElementSibling.classList.add('hide-icon'); // Sembunyikan ikon setelah input yang sedang difokuskan
        input.nextElementSibling.firstElementChild.classList.remove('hide-icon');// Tampilkan ikon jika input kosong
        });
        input.addEventListener('blur', () => {
            if (input.value.trim() === '') {
                input.nextElementSibling.classList.remove('hide-icon'); // Tampilkan ikon jika input kosong
                input.nextElementSibling.firstElementChild.classList.remove('hide-icon');// Tampilkan ikon jika input kosong
                } else {
                    input.nextElementSibling.classList.add('hide-icon'); // Sembunyikan ikon jika input tidak kosong
                    input.nextElementSibling.firstElementChild.classList.remove('hide-icon'); // Tampilkan ikon jika input kosong
            }
        });
    });

    function toggleVisibility() {
    const onElement = document.getElementById('on');
    const offElement = document.getElementById('off');
    const inputElement = document.getElementById('password');

    if (onElement.style.display === 'none') {
        onElement.style.display = 'inline';
        offElement.style.display = 'none';
        inputElement.type = 'password';
        } else {
            onElement.style.display = 'none';
            offElement.style.display = 'inline';
            inputElement.type = 'text';
    }
}