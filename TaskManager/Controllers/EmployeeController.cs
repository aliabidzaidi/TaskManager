using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskManager.Models;

namespace TaskManager.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        //TODO: Replace with Database table
        private static List<Employee> employees = new List<Employee>
            {
                new Employee { Id = 1, Name = "John Doe", DateOfBirth = DateTime.Now, Gender = "Male" },
                new Employee { Id = 2, Name = "Nancy Larson", DateOfBirth = DateTime.Now, Gender = "Female" },
                new Employee { Id = 3, Name = "Tim Michael", DateOfBirth = DateTime.Now, Gender = "Male" },
            };

        private readonly AppDbContext _context;
        public EmployeeController(AppDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<Employee>>> GetEmployees()
        {
            return Ok(await _context.Employees.ToListAsync());
        }

    }
}
