document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("klik");
    const btn = document.getElementById("req");
    const checkbox = document.getElementById("termsCheckbox");
    const submitButton = document.getElementById("submitRequest");
    

    // Open the modal
    btn.onclick = function() {
        modal.style.display = "flex";
    }

    submitButton.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when clicking outside of it
    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // // Enable or disable the submit button based on checkbox state
    checkbox.addEventListener('change', function() {
        submitButton.disabled = !this.checked;
    });
});

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('textArea').value = '';

    let radios = document.getElementsByName('star');
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
});

