using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskManager.Models;

namespace TaskManager.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        [HttpGet]
        public async Task<ActionResult<List<Employee>>> GetEmployees()
        {
            var employees = new List<Employee>
            {
                new Employee { Id = 1, Name = "John Doe", DateOfBirth = DateTime.Now, Gender = "Male" },
                new Employee { Id = 2, Name = "Nancy Larson", DateOfBirth = DateTime.Now, Gender = "Female" },
                new Employee { Id = 3, Name = "Tim Michael", DateOfBirth = DateTime.Now, Gender = "Male" },
            };

            return Ok(employees);
        }
    }
}
