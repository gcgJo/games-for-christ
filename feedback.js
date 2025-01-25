function toggleDropdown(){
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.maxHeight) {
        dropdown.style.maxHeight = null;
    } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    }
}

