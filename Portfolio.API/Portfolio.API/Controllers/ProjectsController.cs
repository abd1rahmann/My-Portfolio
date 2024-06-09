using Microsoft.AspNetCore.Mvc;
using Portfolio.API.Repository;
using Portfolio.API.Repository.Models;

namespace Portfolio.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly IProjectRepository _projectRepository;
        public ProjectsController(IProjectRepository projectRepository)
        {
            _projectRepository = projectRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Project>> GetProjects()
        {
            return _projectRepository.GetAllProjects();
        }

        [HttpGet("{id}")]
        public ActionResult<Project> GetProject(int id)
        {
            var project = _projectRepository.GetProject(id);

            if (project == null)
            {
                return NotFound();
            }
            return project;
        }
    }
}
