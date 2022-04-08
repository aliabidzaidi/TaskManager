namespace TaskManager.Models
{
    public class Task
    {
        public int Id { get; set; }
        public String Title { get; set; }
        public DateTime DateAssigned { get; set; }
        public DateTime DateCompleted { get; set; }
        public Employee Employee { get; set; }
    }
}
