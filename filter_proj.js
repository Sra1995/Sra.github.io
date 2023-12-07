document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const projects = document.querySelectorAll('.project');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        const category = this.getAttribute('data-category');
  
        // Hide all projects
        projects.forEach(project => {
          project.style.display = 'none';
        });
  
        // Show projects that match the selected category or show all if 'All' is selected
        if (category === 'all') {
          projects.forEach(project => {
            project.style.display = 'block';
          });
        } else {
          const filteredProjects = document.querySelectorAll(`.project[data-category="${category}"]`);
          filteredProjects.forEach(project => {
            project.style.display = 'block';
          });
        }
      });
    });
  });
  