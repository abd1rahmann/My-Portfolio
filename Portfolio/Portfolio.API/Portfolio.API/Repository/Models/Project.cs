namespace Portfolio.API.Repository.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string ProjectName { get; set; }
        public string GithubAdress { get; set; }
        public string LiveDemo { get; set; }
        public string TechStack { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
    }
}
