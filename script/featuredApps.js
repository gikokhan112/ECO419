document.addEventListener("DOMContentLoaded", function () {
    // Sample app data
    const apps = [
        {
            id: 1,
            title: "Riddle Quest 2",
            icon: "assets/1.png",
            downloadLink: "app1-details.html"
        },
        {
            id: 2,
            title: "Best Cheat Loader_ v4 esp fix",
            icon: "2.jpg",
            downloadLink: "app2-details.html"
        }
    ];

    const appsContainer = document.getElementById("apps-container");
    const searchBar = document.getElementById("search-bar");

    // Display apps
    function displayApps(filteredApps) {
        appsContainer.innerHTML = ""; // Clear the container
        filteredApps.forEach(app => {
            const appElement = document.createElement("div");
            appElement.classList.add("app-item");
            appElement.innerHTML = `
                <img src="${app.icon}" alt="${app.title} Icon">
                <h2>${app.title}</h2>
                <a href="${app.downloadLink}" class="download-btn">Download</a>
            `;
            appsContainer.appendChild(appElement);
        });
    }

    // Handle search input
    function handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredApps = apps.filter(app =>
            app.title.toLowerCase().includes(searchTerm)
        );
        displayApps(filteredApps);
    }

    // Get the search query from the URL
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("search");

    // Filter apps if a search query exists
    if (searchQuery) {
        searchBar.value = searchQuery; // Pre-fill search bar
        const filteredApps = apps.filter(app =>
            app.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        displayApps(filteredApps);
    } else {
        displayApps(apps); // Display all apps if no query
    }

    // Add event listener for live search
    searchBar.addEventListener("input", handleSearch);
});
