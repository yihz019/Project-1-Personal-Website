document.addEventListener("DOMContentLoaded", function() {

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            // Get the data-project attribute of the hovered nav item
            const projectId = item.getAttribute("data-project");
            show_project(projectId);
        });
    });


    const show_project = (projectId) => {
        let contents = document.querySelectorAll('.project-content');
        contents.forEach(content => content.classList.remove('active'));
    
        const selectedProject = document.getElementById(projectId);
        if (selectedProject) {
            selectedProject.classList.add('active');
        } else {
            selectedProject.classList.add('remove');
        }
    }

});