import inquirer from 'inquirer'
let todos =[];
let condition = true ;
while(condition)
    {
    let addTask = await inquirer.prompt(
        [
            {  
                name : 'todo',
                type : 'input',
                message : 'bazar mai kia chahiye'
            },
            {    
         name :'addMore',
                type :'confirm',
                message :'aur kia chahiye',
                default : 'false'
            }
        ]
    );
 todos.push(addTask.todo);
 condition = addTask.addMore
 console.log(todos);
}



