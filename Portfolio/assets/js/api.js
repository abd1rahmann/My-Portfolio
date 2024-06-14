document.addEventListener('DOMContentLoaded', function () {
    const azureApi = 'https://elmiportfolio.azurewebsites.net/api/Projects'
    const projectsContainer = document.getElementById('projects-container');

    async function fetchProjects() {
        console.log("In Script ...");
        try {
            console.log("Calling API ...");
            const response = await fetch(azureApi);
            if (!response.ok) { 
                throw new Error(`HTTP error! status: ${response.status}`);
                console.log("Failed to call API ...");
            }

            console.log("Api called work ...");
            const projects = await response.json();
            console.log("Response from API: ", projects);
            displayProjects(projects);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    }

    function displayProjects(projects) {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'col-lg-4 col-md-6';
            projectCard.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title" id="projectName">${project.projectName}</h5>
                        <p class="card-text" id="description">${project.description}</p>
                        <p class="card-text" id="techStack">${project.techStack}</p>

                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <a href="${project.githubAdress}" target="_blank" class="btn btn-dark"><i class="fa-brands fa-github"></i> GitHub</a>
                        <a href="${project.liveDemo}" target="_blank" class="btn btn-success"><i class="fa-solid fa-play"></i> Live Demo</a>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }

    fetchProjects();
});
