using Portfolio.API.Repository.Models;
using System.Linq;

namespace Portfolio.API.Repository
{
    public class ProjectRepository : IProjectRepository
    {
        private List<Project> Projects = new List<Project>
        {
            new Project { Id = 1, ProjectName = "EasyBank App", TechStack = "C#, .NET, <i class=\"fa-solid fa-database\"></i>", Date = new DateTime(2024, 6, 1), Description = "A banking application with various financial services.", GithubAdress = "https://github.com/abd1rahmann/EasyBankSolution", LiveDemo = "https://live-demo-link2.com" },
            new Project { Id = 2, ProjectName = "Silicon Site", TechStack = "<i class=\"fa-brands fa-html5\"></i>, <i class=\"fa-brands fa-css3\"></i>, <i class=\"fa-brands fa-js\"></i>, <i class=\"fa-brands fa-react\"></i>", Date = new DateTime(2024, 3, 8), Description = "A social platform for tech enthusiasts.",GithubAdress = "https://github.com/abd1rahmann/Silicon", LiveDemo = "https://abd1rahmann.github.io/Silicon/" }
        };

        public List<Project> GetAllProjects()
        {
            return Projects;
        }

        public Project GetProject(int id)
        {
            var project = Projects.FirstOrDefault(p => p.Id == id);
            return project;
        }

        public bool UpdateProject(Project updatedProject)
        {
            var project = Projects.FirstOrDefault(p => p.Id == updatedProject.Id);
            if (project != null)
            {
                project.ProjectName = updatedProject.ProjectName;
                project.TechStack = updatedProject.TechStack;
                project.Date = updatedProject.Date;
                project.Description = updatedProject.Description;
                project.GithubAdress = updatedProject.GithubAdress;
                project.LiveDemo = updatedProject.LiveDemo;
                return true;
            }
            return false;
        }
    }
}
