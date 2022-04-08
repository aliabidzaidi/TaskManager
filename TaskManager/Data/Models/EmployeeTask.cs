namespace TaskManager.Models
{
    public class EmployeeTask
    {
        public int Id { get; set; }
        public String Title { get; set; }
        public DateTime DateAssigned { get; set; }
        public DateTime DateCompleted { get; set; }
        public Employee Employee { get; set; }
    }
}
