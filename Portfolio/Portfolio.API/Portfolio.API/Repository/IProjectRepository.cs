using Portfolio.API.Repository.Models;

namespace Portfolio.API.Repository
{
    public interface IProjectRepository
    {
        List<Project> GetAllProjects();
        Project GetProject(int id);
    }
}
