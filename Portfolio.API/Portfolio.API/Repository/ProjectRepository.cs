using Portfolio.API.Repository.Models;
using static System.Net.WebRequestMethods;

namespace Portfolio.API.Repository
{
    public class ProjectRepository : IProjectRepository
    {
        private static List<Project> Projects = new List<Project>
        {
            new Project { Id = 1, ProjectName = "BankAppen", TechStack = "C#, .NET, SQL", Date = new DateTime(2024, 6, 1), Description = "A banking application with various financial services.", GithubAdress = "https://github.com/abd1rahmann/EasyBankSolution", LiveDemo = "https://live-demo-link2.com" },
            new Project { Id = 2, ProjectName = "Silicon", TechStack = "HTML, CSS, JavaScript, React", Date = new DateTime(2024, 3, 8), Description = "A social platform for tech enthusiasts.",GithubAdress = "https://github.com/abd1rahmann/Silicon", LiveDemo = "https://abd1rahmann.github.io/Silicon/" }
            
        };

        public List<Project> GetAllProjects()
        {
            return Projects;
        }

        public Project GetProject(int id)
        {
            var project = Projects.FirstOrDefault(p => p.Id == id);

            if(project == null)
            {
                return null;
            }

            return project;
        }
    }
}
