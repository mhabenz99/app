// script.js
document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');

    const urlParams = new URLSearchParams(window.location.search);
    const appsUrl = urlParams.get('apps');

    if (appsUrl) {
        fetch(appsUrl)
            .then(response => response.json())
            .then(data => {
                appContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
            })
            .catch(error => {
                appContainer.innerHTML = `<p>Error loading apps: ${error}</p>`;
            });
    } else {
        appContainer.innerHTML = `<p>No apps URL provided.</p>`;
    }
});
