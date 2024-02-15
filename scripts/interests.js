function loadInterest() {
    const selection = document.getElementById('interestSelect').value;

    switch (selection) {
        case 'reading':
            window.location.href = 'interests/reading.html';
            break;
        case 'video-games':
            window.location.href = 'interests/video-games.html';
            break;
        case 'outdoors':
            window.location.href = 'interests/outdoors.html';
            break;
        case 'creative-projects':
            window.location.href = 'interests/creative-projects.html';
            break;
        // No default case needed as we're handling the navigation directly
    }
}