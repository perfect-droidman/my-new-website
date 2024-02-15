function navigateTo() {
    const selection = document.getElementById('resumeCvSelect').value;
    if (selection) {
        window.location.href = selection;
    }
}
