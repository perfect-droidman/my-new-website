function loadResumeCV() {
    const selection = document.getElementById('resumeCVSelect').value;

    switch (selection) {
        case 'resume':
            window.location.href = 'resume-cv/resume.html';
            break;
        case 'cv':
            window.location.href = 'resume-cv/cv.html';
            break;
        default:
            window.location.href = 'resume-cv.html'
    }
}
