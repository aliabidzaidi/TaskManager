# Task Manager Web API in .net core 

## To Build and Run

Clone and Build the project
For Entity Framework
``` powershell
  # update DefaultConnection in appsettings.json 
  dotnet ef datbaase update
```
Run and Hot Reload the app and test on swagger UI


## Web Methods

| Request      | Method  | Description          | Sample Response   |
| :---------:  | :-----: | :------------------: | :---------------: |
| /employee    | GET     | Get All Employees    |                   |
| /task        | GET     | Get All Tasks        |                   |
| /task        | POST    | Add a Task           |                   |
| /task        | PUT     | Edit a task          |                   |
| /task/{id}   | GET     | Get Task By Id       |                   |
| /task/{id}   | DELETE  | Delete a Task by Id  |                   |