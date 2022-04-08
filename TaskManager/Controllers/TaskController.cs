using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskManager.Models;

namespace TaskManager.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<EmployeeTask>>> GetTasks()
        {
            var tasks = new List<EmployeeTask>
            {
                new EmployeeTask{ Id=1, Title="Collect All Employees Addresses", }
            };

            return Ok(tasks);
        }
    }
}
