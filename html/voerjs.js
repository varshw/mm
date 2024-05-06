window.onload = function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
    var requiredInputs = document.querySelectorAll('[required]');
    var isMissingData = false;
    requiredInputs.forEach(function(input) {
    if (!input.value.trim()) {
    isMissingData = true;
    return;
    }
    });
    characters)
    var nameInput = document.getElementById('name');
    var nameValue = nameInput.value.trim();
    if (!nameValue.match(/^[a-zA-Z\s]*$/)) {
    isMissingData = true;
    if (!isNaN(nameValue)) {
    alert('Please enter an alphabet.');
    } else {
    alert('Name should contain only alphabetic characters.');
}
}
chosen)
var photoInput = document.getElementById('photo');
if (photoInput.files.length === 0) {
isMissingData = true;
alert('Please choose a photo.');
}
if (isMissingData) {
event.preventDefault();
alert('Please fill out all required fields.');
}
});
};