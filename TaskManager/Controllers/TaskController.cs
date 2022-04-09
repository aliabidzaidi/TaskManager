using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskManager.Models;

namespace TaskManager.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        //TODO: Replace with Database table
        private static List<EmployeeTask> tasks = new List<EmployeeTask>
            {
                new EmployeeTask{ Id=1, Title="Collect All Employees Addresses", },
                new EmployeeTask{ Id=2, Title="Distribute Chocolates to Best Employees", },
                new EmployeeTask{ Id=3, Title="Update nginx on Server A2", }
            };

        private readonly AppDbContext _context;

        public TaskController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<EmployeeTask>>> Get()
        { 
            return Ok(await _context.Tasks.Include(t => t.Employee).ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeTask>> Get(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
                return BadRequest("Employee Task Not Found");

            var result = await _context.Tasks.Include(t => t.Employee).ToListAsync();
            
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<List<EmployeeTask>>> Post(EmployeeTask task)
        {
            Employee emp = _context.Employees.Find(task.Employee.Id);
            if (emp == null)
                return BadRequest("Employee not found");

            task.Employee = emp;
            _context.Tasks.Add(task);

            await _context.SaveChangesAsync();
            
            return Ok(await _context.Tasks.Include(t => t.Employee).ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<EmployeeTask>>> Put(EmployeeTask task)
        {
            //var tx = tasks.Find(x => x.Id == task.Id);
            var tx = _context.Tasks.Find(task.Id);
            if (tx == null)
                return BadRequest("Task Not Found");

            Employee emp = _context.Employees.Find(task.Employee.Id);
            if (emp == null)
                return BadRequest("Employee not found");

            tx.Title = task.Title;
            tx.DateAssigned = task.DateAssigned;
            tx.DateCompleted = task.DateCompleted;
            tx.Employee = emp;

            await _context.SaveChangesAsync();

            return Ok(tx);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<EmployeeTask>>> Delete(int id)
        {
            //var task = tasks.Find(t => t.Id == id);
            var task = _context.Tasks.Find(id);
            if (task == null)
                return BadRequest("Employee Task not found");

            //tasks.Remove(task);
            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();
            
            return Ok(await _context.Tasks.Include(t => t.Employee).ToListAsync());
        }

    }
}
