function loadNavigation() {
    fetch('navigation.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navigation-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading the navigation:', error));
}

// Load the navigation when the document content has been fully loaded
document.addEventListener('DOMContentLoaded', loadNavigation);
