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
  
        // Show projects that match any of the selected categories or show all if 'All' is selected
        if (category === 'all') {
          projects.forEach(project => {
            project.style.display = 'block';
          });
        } else {
          const selectedCategories = category.split(' ');
          projects.forEach(project => {
            const projectCategories = project.getAttribute('data-category').split(' ');
  
            if (selectedCategories.some(cat => projectCategories.includes(cat))) {
              project.style.display = 'block';
            }
          });
        }
      });
    });
  });
  