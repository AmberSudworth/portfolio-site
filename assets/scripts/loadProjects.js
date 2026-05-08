//loads projects into html page using the json file attributes.
function loadProjects() {
    console.log('Loading projects from JSON file...');
    fetch('assets/projects.json')
    .then(response => response.json())
    .then(data => {
        console.log('Projects list fetched successfully');
        const projectListHolder = document.getElementById('projectContainer');
        //should create a new article called projectTile for each project in the json file.
        //then populate it with the data.
        projectListHolder.innerHTML = '';
        //get rid of initial html.
        console.log('Removed placeholder html.');
        data.projects.forEach(project => {
            const projectTile = document.createElement('article');
            projectTile.classList.add('projectTile');
            projectTile.innerHTML = `
                <h2>${project.title}</h2>
                <img src="${project.image}" alt="${project.imageAlt}">
                <p>${project.description}</p>
                <div class="projectDetails">
                    <p class="small projectDate">${project.date}</p>
                    <a href="${project.projectLink}">See More</a>
                </div>
            `;
            if(project.title=="Final year research project"){
            projectTile.id = "highlightedProject";
            }
            projectListHolder.appendChild(projectTile);
        }
        )
        console.log('Projects loaded and displayed successfully.');
        const archiveLink = document.createElement('a');
        archiveLink.id = 'archiveLinkButton';
        archiveLink.classList.add('nodeco');
        archiveLink.href = "archive.html";
        archiveLink.textContent = "Archive";
        projectListHolder.appendChild(archiveLink);
        console.log('Archive link added successfully. Function is finished.');
    });
}

loadProjects();